<?php
session_start();
require 'connectDetails.php';

$query ="SELECT * FROM `posts`";

//Finds a row with this email...
$result = mysqli_query($conn, $query) or trigger_error(mysqli_error($conn)." in ".$query);

if (!$result) {
	echo "Could not successfully run query";
}
if (mysqli_num_rows($result) == 0){
	echo "No rows found";

}

if (mysqli_num_rows($result) != 0) {
	
	while($row = mysqli_fetch_assoc($result)){
     $json[] = $row;
	}

     $data = json_encode($json);
	echo $data;
}

//return $result;
