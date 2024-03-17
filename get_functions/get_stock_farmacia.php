<?php


include("../cors.php");
include('../connect_db.php');

//hacemos una consulta para obtener todos los datos de la tabla pacientes
$allPacientes = "SELECT * FROM farmacia";

$ejecutarConsulta = mysqli_query( $connection, $allPacientes );

//creamos una variable de tipo arreglo para convertirlo en un json
$json = array();

//iteramos todas las filas
	while($row = mysqli_fetch_array($ejecutarConsulta)){

        //agregamos al arreglo todos los datos en forma de objeto
		$json[] = array(

			'stockMedicamento' => $row['Cantidad_Stock'],
		);
	}

	$jsonString = json_encode($json);

	echo $jsonString;

?>