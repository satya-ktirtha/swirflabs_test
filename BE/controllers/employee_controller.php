<?php
include_once __DIR__ . "/../models/employee_model.php";

// naive data cleaning
function containsSuspiciousCharacters($input) {
    return preg_match('/[-_.\'"`]/', $input);
}

function searchEmployee($name, $id) {
    return withDefaultDb(function($conn) use ($name, $id) {
        try {
            $stmt = $conn->prepare('SELECT * FROM employee WHERE cName=? AND cId=?');

            $stmt->bind_param("ss", $name, $id);

            if (!$stmt) {
                throw new Exception("Failed to prepare SQL statement: " . $conn->error);
            }

            $stmt->execute();
            $result = $stmt->get_result();

            $employees = $result->fetch_all(MYSQLI_ASSOC);

            return $employees;
        } catch(Exception $e) {
            throw new Exception(
                "Failed to retrieve employee data",
                0,
                new Exception($e) 
            );
        }
    });
}

function getEmployee() {
    controller(function() {
        withDefaultDb(function($conn) {
            try {
                $stmt = $conn->prepare('SELECT * FROM employee');

                if (!$stmt) {
                    throw new Exception("Failed to prepare SQL statement: " . $conn->error);
                }

                $stmt->execute();
                $result = $stmt->get_result();

                $employees = $result->fetch_all(MYSQLI_ASSOC);

                echo json_encode([
                    "status" => 0,
                    "data" => $employees
                ]);
            } catch(Exception $e) {
                throw new Exception(
                    "Failed to retrieve employee data",
                    0,
                    new Exception($e) 
                );
            }
        });

    });
}

function postEmployee() {
    controller(function() {
        withDefaultDb(function($conn) {
            try {
                $name = $_POST['employeeName'] ?? null;
                $id = $_POST['idNumber'] ?? null;
                $occupation = $_POST['occupation'] ?? null;
                $address = $_POST['address'] ?? null;
                $pob = $_POST['pob'] ?? null;
                $dob = $_POST['dob'] ?? null;

                $validationErrors = [];
                if(!$name) {
                    $validationErrors["name"] = "Name cannot be empty";
                } else if(containsSuspiciousCharacters($name)) {
                    $validationErrors["name"] = "Name contains unallowed characters";
                }

                if(!$id) {
                    $validationErrors["id"] = "Id cannot be empty";
                } else if(containsSuspiciousCharacters($id)) {
                    $validationErrors["id"] = "Id contains unallowed characters";
                }

                if(!$occupation) {
                    $validationErrors["occupation"] = "Occupation cannot be empty";
                } else if($occupation == "unemployed") {
                    // TODO hardcoded and can be optimized
                    // Assuming this is not valid because an employee
                    // should not be unemployed
                    $validationErrors["occupation"] = "Occupation cannot be unemployed";
                } else if(containsSuspiciousCharacters($occupation)) {
                    $validationErrors["occupation"] = "Occupation contains unallowed characters";
                }

                if(!$dob) {
                    $validationErrors["dob"] = "Dob cannot be empty";
                } else if((new DateTime())->diff(new DateTime($dob))->y < 18) {
                    $validationErrors["dob"] = "Employee age must be greater than 18";
                }

                if(containsSuspiciousCharacters($pob)) {
                    $validationErrors["pob"] = "Pob contains unallowed characters";
                }

                if(containsSuspiciousCharacters($address)) {
                    $validationErrors["address"] = "Address contains unallowed characters";
                }

                if(!empty($validationErrors)) {
                    echo json_encode([
                        "status" => -1,
                        "validation" => $validationErrors
                    ]);

                    return;
                }

                $existingEmployees = searchEmployee($name, $id);
                if(count($existingEmployees) > 0) {
                    echo json_encode([
                        "status" => -1,
                        "message" => "Employee exists"
                    ]);

                    return;
                }

                $employee = new Employee($id, $name, $occupation, $pob, $dob, $address);

                $stmt = $conn->prepare("
                    INSERT INTO employee VALUES
                    (?, ?, ?, ?, ?, ?, ?, ?, ?)
                ");
                $id = $employee->getId();
                $name = $employee->getName();
                $occupation = $employee->getOccupation();
                $dob = $employee->getDob();
                $age = $employee->getAge();
                $address = $employee->getAddress();
                $pob = $employee->getPob();
                $created = date("Y-m-d H:i:s");
                $updated = $created;

                $stmt->bind_param("ssssissss", $id, $name, $occupation, $dob, $age, $address, $pob, $created, $updated);

                if(!$stmt->execute()) {
                    throw new Exception("Could not save employee");
                }

                $stmt = $conn->prepare('SELECT * FROM employee');

                if (!$stmt) {
                    throw new Exception("Failed to prepare SQL statement: " . $conn->error);
                }

                $stmt->execute();
                $result = $stmt->get_result();

                $employees = $result->fetch_all(MYSQLI_ASSOC);

                echo json_encode([
                    "status" => 0,
                    "data" => $employees
                ]);
            } catch(Exception $e) {
                throw new Exception(
                    "Encountered a problem in the server",
                    0,
                   new Exception($e) 
                );
            }

        });
    });
}
