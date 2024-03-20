<?php


include("../cors.php");
include('../connect_db.php');

//hacemos una consulta para obtener todos los datos de la tabla medico
$allMedicos = "SELECT * FROM antigenos";

$ejecutarConsulta = mysqli_query( $connection, $allMedicos );

//creamos una variable de tipo arreglo para convertirlo en un json
$json = array();

	while($row = mysqli_fetch_array($ejecutarConsulta)){

		$json[] = array(

			'codigoAntigeno' => $row['Codigo_antigeno'],
			'nombreAntigeno' => $row['Nombre'],
		);
	}

	$jsonString = json_encode($json);

	echo $jsonString;

?>