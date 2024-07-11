<?php

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $username = "malcolm";
  $password = "password123";


  $input_username = $_POST['username'];
  $input_password = $_POST['password'];


  if ($input_username === $username && $input_password === $password) {

    $_SESSION["username"] = $username;

  
    header("Location: dashboard.php");
    exit();
  } else {
 
    echo "Invalid username or password!";
  }
}
?>
