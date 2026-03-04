<?php
// backend-api/api/insights.php
include_once '../config/core.php';
set_api_headers('GET');

include_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

try {
    // Pagination attributes
    $page = isset($_GET['page']) && is_numeric($_GET['page']) ? $_GET['page'] : 1;
    $limit = isset($_GET['limit']) && is_numeric($_GET['limit']) ? $_GET['limit'] : 10;
    $offset = ($page - 1) * $limit;

    // Optional category filter
    $category_slug = isset($_GET['category']) ? $_GET['category'] : '';

    $where_clause = "";
    if (!empty($category_slug)) {
        $where_clause = " WHERE c.slug = :category_slug ";
    }

    $query = "SELECT 
                a.id, a.title, a.slug, a.summary, a.cover_image_url, a.estimated_read_time, a.published_at,
                c.name as category_name, c.slug as category_slug,
                u.name as author_name, u.image_url as author_image
              FROM articles a
              LEFT JOIN categories c ON a.category_id = c.id
              LEFT JOIN authors u ON a.author_id = u.id
              " . $where_clause . "
              ORDER BY a.published_at DESC
              LIMIT :limit OFFSET :offset";

    $stmt = $db->prepare($query);

    if (!empty($category_slug)) {
        $category_slug_sanitized = htmlspecialchars(strip_tags($category_slug));
        $stmt->bindParam(':category_slug', $category_slug_sanitized);
    }

    $stmt->bindParam(':limit', $limit, PDO::PARAM_INT);
    $stmt->bindParam(':offset', $offset, PDO::PARAM_INT);

    $stmt->execute();
    $num = $stmt->rowCount();

    // Query for total count (to calculate frontend pagination)
    $count_query = "SELECT COUNT(*) as total FROM articles a LEFT JOIN categories c ON a.category_id = c.id " . $where_clause;
    $count_stmt = $db->prepare($count_query);
    if (!empty($category_slug)) {
        $count_stmt->bindParam(':category_slug', $category_slug_sanitized);
    }
    $count_stmt->execute();
    $total_rows = $count_stmt->fetch(PDO::FETCH_ASSOC)['total'];
    $total_pages = ceil($total_rows / $limit);

    if ($num > 0) {
        $articles_arr = array();

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            // format output
            $article_item = array(
                "id" => $row['id'],
                "title" => html_entity_decode($row['title']),
                "slug" => $row['slug'],
                "summary" => html_entity_decode($row['summary']),
                "cover_image_url" => $row['cover_image_url'],
                "estimated_read_time" => $row['estimated_read_time'],
                "published_at" => $row['published_at'],
                "category" => array(
                    "name" => $row['category_name'],
                    "slug" => $row['category_slug']
                ),
                "author" => array(
                    "name" => $row['author_name'],
                    "image_url" => $row['author_image']
                )
            );

            array_push($articles_arr, $article_item);
        }

        http_response_code(200);
        echo json_encode([
            "data" => $articles_arr,
            "meta" => [
                "page" => (int)$page,
                "limit" => (int)$limit,
                "total_pages" => $total_pages,
                "total_results" => (int)$total_rows
            ]
        ]);
    }
    else {
        http_response_code(200);
        echo json_encode(["data" => [], "message" => "No articles found."]);
    }

}
catch (PDOException $e) {
    error_log("Database Error in insights.php: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(["message" => "Ocorreu um erro interno de servidor. Tente novamente mais tarde."]);
}
?>
