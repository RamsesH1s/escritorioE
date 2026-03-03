<?php
// backend-api/api/contact.php
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

// Get posted data
$data = json_decode(file_get_contents("php://input"));

if (!empty($data->name) && !empty($data->email) && !empty($data->message)) {

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
        http_response_code(500);
        echo json_encode(["message" => "System error.", "error" => $e->getMessage()]);
    }
}
else {
    http_response_code(400);
    echo json_encode(["message" => "Incomplete data. Name, email, and message are required."]);
}
?>
