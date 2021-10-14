<?php
    require("connect.php");
    require("functions.php");

<<<<<<< HEAD
    // get our data (one row or many) from our DB
    // if we pass in the id param, use it. else set it to null
    $id = isset($_GET["id"]) ? $_GET["id"] : null;
    
    // and then send that data back to our JS Fetch API
    // $result = getProfData($pdo, $id);
    echo json_encode(getProfData($pdo, $id));
=======
   // filter the incoming basic request and call the appropriate function
   // (these live in functions.php)
   if (isset($_GET["id"])) {
       // this is the id that the user is passing to the script (1, 2, 3 etc) => ?id=1
       // it referes to the row of data that we want to retrieve from the DB
       $id = $_GET["id"]; 
       
       // create a variable to hold the result of the database request
       $result = getOneProf($pdo, $id);
   } else {
       $result = getAllProfs($pdo);
   }

   // send the database result (our data) back to the javascript file
   echo json_encode($result);
>>>>>>> 70158474b0c7d92724dc9af36adc3cf36f8f2a9d
