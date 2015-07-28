<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "osc";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
} 
$params = json_decode($_GET[0], true);
// $data = json_encode($params);
// var_dump($params);
// exit;
$sql = "
	UPDATE 
		products_description
	SET
		products_name = '" . $params['name'] . "', 
		products_description = '" . $params['description'] . "'
	Where
		products_id = '" . (int)$params['id'] . "'
";

$result = $conn->query($sql);
echo json_encode('successful');