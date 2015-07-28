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
$params = $_GET;

$sql = "
	SELECT 
		products_id, 
		products_name, 
		products_description 
	FROM 
		products_description 
	Where
		products_id = '" . (int)$params['id'] . "'
";

$result = $conn->query($sql);
$data = array();

if ($result->num_rows > 0) {
    // output data of each row
	while($row = $result->fetch_assoc()) {
		$data[] = array(
			'id' => $row["products_id"], 
			'name' => $row["products_name"],
			'description' => $row["products_description"]
		);
	}
} else {
	$data[] = array();
}

echo json_encode($data);