<?php


include("../cors.php");
include('../connect_db.php');

//hacemos una consulta para obtener todos los datos de la tabla medico
$allMedicos = "SELECT * FROM medico";

$ejecutarConsulta = mysqli_query( $connection, $allMedicos );

//creamos una variable de tipo arreglo para convertirlo en un json
$json = array();

	while($row = mysqli_fetch_array($ejecutarConsulta)){

		$json[] = array(

			'codigoMedico' => $row['Codigo_Medico'],
			'nombreMedico' => $row['Nombre_Medico'],
            'apellidosMedico' => $row['Apellidos_Medico'],
		);
	}

	$jsonString = json_encode($json);

	echo $jsonString;

?>