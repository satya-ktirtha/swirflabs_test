<?php
$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

require __DIR__ . "/../config/db_config.php";
require __DIR__ . "/../utils/db.php";
require __DIR__ . "/../controllers/controller.php";

// wildcard * should be replaced by actual origins for production
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if(strpos($path, "/api/employee") === 0) {
    require __DIR__ . "/../controllers/employee_controller.php";

    if($path == "/api/employee/get") {
        getEmployee();

        exit;
    }

    if($path == "/api/employee/post") {
        postEmployee();

        exit;
    }
}
