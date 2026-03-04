<?php
// backend-api/api/contact.php
include_once '../config/core.php';
set_api_headers('POST');

include_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

// Get posted data
$data = json_decode(file_get_contents("php://input"));

if (!empty($data->name) && !empty($data->email) && !empty($data->message)) {
    if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["message" => "Formato de e-mail inválido."]);
        exit();
    }

    try {
        $query = "INSERT INTO contacts SET name=:name, email=:email, phone=:phone, message=:message";
        $stmt = $db->prepare($query);

        // sanitize
        $name = htmlspecialchars(strip_tags($data->name));
        $email = htmlspecialchars(strip_tags($data->email));
        $phone = isset($data->phone) ? htmlspecialchars(strip_tags($data->phone)) : null;
        $message = htmlspecialchars(strip_tags($data->message));

        // bind values
        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":phone", $phone);
        $stmt->bindParam(":message", $message);

        if ($stmt->execute()) {
            http_response_code(201);
            echo json_encode(["message" => "Contact request submitted successfully."]);
        }
        else {
            http_response_code(503);
            echo json_encode(["message" => "Unable to submit contact request."]);
        }
    }
    catch (PDOException $e) {
        error_log("Database Error in contact.php: " . $e->getMessage());
        http_response_code(500);
        echo json_encode(["message" => "Ocorreu um erro interno de servidor. Tente novamente mais tarde."]);
    }
}
else {
    http_response_code(400);
    echo json_encode(["message" => "Incomplete data. Name, email, and message are required."]);
}
?>
