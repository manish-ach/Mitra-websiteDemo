<?php

$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];


$data = array(
  $username => array(
    'password' => $password,
    'email' => $email
  )
);

// Write data to JSON file (ensure correct path and permission)
$jsonData = json_encode($data);
file_put_contents('data.json', $jsonData);

echo "Data written to data.json!";
header("Location: ../login.html");

// Exit the script to prevent further execution
exit();
?>
