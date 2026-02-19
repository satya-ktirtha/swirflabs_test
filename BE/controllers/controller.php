<?php
function controller($action) {
    header('Content-Type: application/json');
    try {

        $action();
    } catch(Exception $e) {
        if($e->getPrevious()) {
            error_log($e->getPrevious()->getMessage());
        }

        echo json_encode([
            "status" => -1,
            "message" => $e->getMessage()
        ]);

        exit;
    }
}

// new function
function foobar() {
}