<?php


include("../cors.php");
include('../connect_db.php');

//hacemos una consulta para obtener todos los datos de la tabla tipos de cita
$tiposCita = "SELECT * FROM tipo_cita";

$ejecutarConsulta = mysqli_query( $connection, $tiposCita );

//creamos una variable de tipo arreglo para convertirlo en un json
$json = array();

	while($row = mysqli_fetch_array($ejecutarConsulta)){

		$json[] = array(

			'tipoCita' => $row['tipo_cita'],
		);
	}

	$jsonString = json_encode($json);

	echo $jsonString;

?>