<?php
    // store the processed results in a variable
    $result = array();

    function getOneProf($conn, $prof) {
        if (isset($prof)) {
            echo $prof;
        }
        
        $query = "SELECT * FROM profs WHERE id='".$prof."'";

        // this is the database result -> the raw data that SQL gives us
        $runQuery = $conn->query($query);    

        // process our DB result and make something we can use with AJAX
        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
         $result[] = $row;
        }

        return $result;
    }

    function getAllProfs($conn) {
        //echo "inside get all";

        $query = "SELECT * FROM profs";

        // this is the database result -> the raw data that SQL gives us
        $runQuery = $conn->query($query);    

        // process our DB result and make something we can use with AJAX
        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
         $result[] = $row;
        }

        return $result;
    }
    