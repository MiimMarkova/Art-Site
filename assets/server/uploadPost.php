<?php
session_start();
require 'connectDetails.php';

$title = isset($_POST['title1']) ? $_POST['title1']: '';
$description = isset($_POST['description1']) ? $_POST['description1'] : '';
$image = isset($_POST['image1']) ? $_POST['image1'] : '';
$directory = isset($_POST['directory1']) ? $_POST['directory1'] : 'common';
$user_id = isset($_POST['user_id1']) ? $_POST['user_id1']: '';


$query = "INSERT INTO `posts` (`id`, `title`, `description`, `picture`, `directory`, `users_id`) 
VALUES (NULL, '$title', '$description', '$image', '$directory', '$user_id');";

$result = mysqli_query($conn, $query) or trigger_error(mysqli_error($conn)." in ".$query);