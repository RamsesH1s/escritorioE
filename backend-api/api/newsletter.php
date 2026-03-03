<?php
// backend-api/api/newsletter.php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->email) && filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
    try {
        // Check if email already exists
        $check_query = "SELECT id FROM newsletter_subscribers WHERE email = :email LIMIT 0,1";
        $check_stmt = $db->prepare($check_query);
        $email_sanitized = htmlspecialchars(strip_tags($data->email));
        $check_stmt->bindParam(":email", $email_sanitized);
        $check_stmt->execute();

        if ($check_stmt->rowCount() > 0) {
            http_response_code(409); // Conflict
            echo json_encode(["message" => "Email already subscribed."]);
            exit();
        }

        $query = "INSERT INTO newsletter_subscribers SET email=:email";
        $stmt = $db->prepare($query);

        $stmt->bindParam(":email", $email_sanitized);

        if ($stmt->execute()) {
            http_response_code(201);
            echo json_encode(["message" => "Subscribed successfully."]);
        }
        else {
            http_response_code(503);
            echo json_encode(["message" => "Unable to subscribe."]);
        }
    }
    catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["message" => "System error.", "error" => $e->getMessage()]);
    }
}
else {
    http_response_code(400);
    echo json_encode(["message" => "Invalid or missing email address."]);
}
?>
