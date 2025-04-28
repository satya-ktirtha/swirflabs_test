<?php
include_once __DIR__ . "/../config/db_config.php";

function withConfigDb($host, $port, $username, $pass, $db, $then) {
    $conn = null;
    try {
        $conn = new mysqli($host, $username, $pass, $db, $port);

        if($conn->connect_error) {
            throw new Exception(
                "Encountered a problem in the server",
                0,
                new Exception($conn->connect_error)
            );
        }

        return $then($conn);
    } catch(Exception $e) {
        throw new Exception(
            "Encountered a problem in the server",
            0,
            new Exception($e)
        );
    } finally {
        if($conn && !$conn->connect_error) {
            $conn->close();
        }
    }
}

function withDefaultDb($then) {
    global $DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $DB_NAME;

    try {
        return withConfigDb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $DB_NAME, $then);
    } catch(Exception $e) {
        throw $e;
    }
}
