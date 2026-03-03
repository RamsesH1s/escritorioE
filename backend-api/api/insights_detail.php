<?php
// backend-api/api/insights_detail.php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

$slug = isset($_GET['slug']) ? $_GET['slug'] : die();

try {
    $query = "SELECT 
                a.id, a.title, a.slug, a.content, a.summary, a.cover_image_url, a.estimated_read_time, a.published_at,
                c.name as category_name, c.slug as category_slug,
                u.name as author_name, u.image_url as author_image, u.role as author_role
              FROM articles a
              LEFT JOIN categories c ON a.category_id = c.id
              LEFT JOIN authors u ON a.author_id = u.id
              WHERE a.slug = ?
              LIMIT 0,1";

    $stmt = $db->prepare($query);
    $slug_sanitized = htmlspecialchars(strip_tags($slug));
    $stmt->bindParam(1, $slug_sanitized);

    $stmt->execute();
    $num = $stmt->rowCount();

    if ($num > 0) {
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $article_detail = array(
            "id" => $row['id'],
            "title" => html_entity_decode($row['title']),
            "slug" => $row['slug'],
            "content" => html_entity_decode($row['content']),
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
                "role" => $row['author_role'],
                "image_url" => $row['author_image']
            )
        );

        http_response_code(200);
        echo json_encode($article_detail);
    }
    else {
        http_response_code(404);
        echo json_encode(["message" => "Article not found."]);
    }
}
catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["message" => "Database Error", "error" => $e->getMessage()]);
}
?>
