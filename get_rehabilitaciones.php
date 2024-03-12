<?php


include("cors.php");
include('connect_db.php');

//hacemos una consulta para obtener todos los datos de la tabla pacientes
$allPacientes = "SELECT * FROM rehabilitacion WHERE Estado = 'En proceso'";

$ejecutarConsulta = mysqli_query( $connection, $allPacientes );

//creamos una variable de tipo arreglo para convertirlo en un json
$json = array();

	while($row = mysqli_fetch_array($ejecutarConsulta)){

		$json[] = array(

			'idPaciente' => $row['Codigo_paciente'],
			'nombrePaciente' => $row['Nombre_Paciente'],
            'apellidosPaciente' => $row['Apellidos_Paciente'],
		);
	}

	$jsonString = json_encode($json);

	echo $jsonString;

?>