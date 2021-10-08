<?php
    require("connect.php");
    require("functions.php");

    // get our data (one row or many) from our DB
    // if we pass in the id param, use it. else set it to null
    $id = isset($_GET["id"]) ? $_GET["id"] : null;
    
    // and then send that data back to our JS Fetch API
    // $result = getProfData($pdo, $id);
    echo json_encode(getProfData($pdo, $id));