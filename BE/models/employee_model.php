<?php
class Employee {
    private $cId;
    private $cName;
    private $cOccupation;
    private $cPob;
    private $dDob;
    private $cAddress;
    private $nAge;
    private $dCreated;
    private $dUpdated;

    public function __construct($cId, $cName, $cOccupation, $cPob, $dDob, $cAddress) {
        $this->cId = $cId;
        $this->cName = $cName;
        $this->cOccupation = $cOccupation;
        $this->cPob = $cPob;
        $this->dDob = $dDob;
        $this->cAddress = $cAddress;
        $this->dCreated = new DateTime();
        $this->dUpdated = new DateTime();
        $this->calculateAge();
    }

    private function calculateAge() {
        $dDob = new DateTime($this->dDob);
        $today = new DateTime();
        $this->nAge = $today->diff($dDob)->y;
    }

    public function getId() {
        return $this->cId;
    }

    public function getName() {
        return $this->cName;
    }

    public function getOccupation() {
        return $this->cOccupation;
    }

    public function getPob() {
        return $this->cPob;
    }

    public function getDob() {
        return $this->dDob;
    }

    public function getAddress() {
        return $this->cAddress;
    }

    public function getAge() {
        return $this->nAge;
    }

    public function getCreated() {
        return $this->dCreated->format('Y-m-d H:i:s');
    }

    public function getUpdated() {
        return $this->dUpdated->format('Y-m-d H:i:s');
    }

    public function getInfo() {
        return [
            'id' => $this->getId(),
            'name' => $this->getName(),
            'occupation' => $this->getOccupation(),
            'place_of_birth' => $this->getPob(),
            'date_of_birth' => $this->getDob(),
            'age' => $this->getAge(),
            'created_at' => $this->getCreated(),
            'updated_at' => $this->getUpdated()
        ];
    }
}
