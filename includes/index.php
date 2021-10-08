<?php
    require("connect.php");
    require("functions.php");

   // filter the incoming basic request and call the appropriate functino

   if (isset($_GET["id"])) {
       $result = getOneProf($pdo, $id);
   } else {
       $result = getAllProfs($pdo);
   }

   echo json_encode($result);