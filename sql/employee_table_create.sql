CREATE TABLE `employee` (
  `cId` varchar(16) NOT NULL,
  `cName` varchar(50) NOT NULL,
  `cOccupation` varchar(20) NOT NULL,
  `dDob` date NOT NULL,
  `nAge` int NOT NULL,
  `cAddress` varchar(50) DEFAULT NULL,
  `cPob` varchar(50) DEFAULT NULL,
  `dCreated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dUpdated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`cId`,`cName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
