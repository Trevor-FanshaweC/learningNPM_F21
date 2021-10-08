<?php
    require("connect.php");
    require("functions.php");

   // filter the incoming basic request and call the appropriate functino

   if (isset($_GET["id"])) {
       $id = $_GET["id"];
       $result = getProfData($pdo, $id);
   } else {
       $result = getProfData($pdo, null);
   }

   echo json_encode($result);