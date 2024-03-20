<?php


include("../cors.php");
include('../connect_db.php');

//hacemos una consulta para obtener todos los datos de la tabla tipo_paciente
$consultaTipo = "SELECT * FROM tipo_paciente";

$ejecutarConsulta = mysqli_query( $connection, $consultaTipo );

//creamos una variable de tipo arreglo para convertirlo en un json
$json = array();

	while($row = mysqli_fetch_array($ejecutarConsulta)){

		$json[] = array(

			'codigo' => $row['Codigo_TipoPaciente'],
			'descripcion' => $row['Descripcion'],
		);
	}

	$jsonString = json_encode($json);

	echo $jsonString;

?>