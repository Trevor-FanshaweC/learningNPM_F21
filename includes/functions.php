<?php
    // store the processed results in a variable
    $result = array();

    function getProfData($conn, $prof) {
        if (empty($prof)) {
            $query = "SELECT * FROM profs";
        } else {
            $query = "SELECT * FROM profs WHERE id='". $prof ."'";
        }

        $runQuery = $conn->query($query);    

        // process our DB result and make something we can use with AJAX
        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
         $result[] = $row;
        }

        return $result;
    }
    