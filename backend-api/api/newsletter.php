<?php
// backend-api/api/newsletter.php
include_once '../config/core.php';
set_api_headers('POST');

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
        error_log("Database Error in newsletter.php: " . $e->getMessage());
        http_response_code(500);
        echo json_encode(["message" => "Ocorreu um erro interno de servidor. Tente novamente mais tarde."]);
    }
}
else {
    http_response_code(400);
    echo json_encode(["message" => "Invalid or missing email address."]);
}
?>
