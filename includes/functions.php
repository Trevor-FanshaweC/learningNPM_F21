<?php
    // store the processed results in a variable
    $result = array();

<<<<<<< HEAD
    function getProfData($conn, $prof) {
        if (is_null($prof)) {
            $query = "SELECT * FROM profs";
        } else {
            $query = "SELECT * FROM profs WHERE id='". $prof ."'";
        }

=======
    // if a user passes an ID via a query string (?id=1)
    // then we should retrieve the row of data that matches and pass it back to the app
    function getOneProf($conn, $prof) {        
        $query = "SELECT * FROM profs WHERE id='".$prof."'";

        // this is the database result -> the raw data that SQL gives us
        $runQuery = $conn->query($query);    

        // process our DB result and make something we can use with AJAX
        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
         $result[] = $row;
        }

        return $result;
    }

    // if a user DOESN'T pass an id, then they must want ALL the data so retrieve ALL ofit
    // and pass it back to the app

    function getAllProfs($conn) {
        $query = "SELECT * FROM profs";

        // this is the database result -> the raw data that SQL gives us
>>>>>>> 70158474b0c7d92724dc9af36adc3cf36f8f2a9d
        $runQuery = $conn->query($query);    

        // process our DB result and make something we can use with AJAX
        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
         $result[] = $row;
        }

        return $result;
    }
    