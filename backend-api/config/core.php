<?php
// backend-api/config/core.php

// Show error reporting for development (disable in production)
// error_reporting(E_ALL);
// ini_set('display_errors', 'On');

// Define allowed origins for CORS
// In production, change this to your actual frontend domain, e.g., 'https://meuescritorio.com.br'
$allowed_origins = [
    'http://localhost:3000',
    // 'https://meuescritorio.com.br'
];

/**
 * Send standard JSON headers and handle CORS configuration
 * 
 * @param string $allowed_method The HTTP method allowed for this endpoint (e.g., 'POST', 'GET')
 */
function set_api_headers($allowed_method)
{
    global $allowed_origins;

    $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '*';

    // In development or if allowed, send the actual origin
    if (in_array($origin, $allowed_origins) || in_array('*', $allowed_origins)) {
        header("Access-Control-Allow-Origin: " . $origin);
    }
    else {
        header("Access-Control-Allow-Origin: null"); // Prevent access if not allowed
    }

    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: " . $allowed_method . ", OPTIONS");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    // Handle preflight requests
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    // Validate method
    if ($_SERVER['REQUEST_METHOD'] !== $allowed_method) {
        http_response_code(405);
        echo json_encode(["message" => "Method Not Allowed"]);
        exit();
    }
}
?>
