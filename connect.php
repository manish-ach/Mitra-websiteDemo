<?php

$username = $_POST['username'];
$password = $_POST['password'];

// Replace with our actual data file (if it exists)
$data = json_decode(file_get_contents('register/data.json'), true);

// Check if user exists
if (isset($data[$username]) && $data[$username]['password'] === $password) {
  echo "Login successful!";
  header("Location: main/home/home.html");
  exit();
} else {
  echo "Login failed!";
  header("Location: ../login.html");
  exit();
}
?>
