<?php


include("../cors.php");
include('../connect_db.php');

$idPaciente = $_POST['idPaciente'];


//hacemos una consulta para obtener todos los datos de la tabla pacientes
$consultaHistorial = "SELECT * FROM laboratorio WHERE Numero_Consulta = '$idPaciente'";

$ejecutarConsulta = mysqli_query( $connection, $consultaHistorial );

//creamos una variable de tipo arreglo para convertirlo en un json
$json = array();

	while($row = mysqli_fetch_array($ejecutarConsulta)){

		$json[] = array(
            "pruebasLaboratorio"=> $row["Pruebas"],
            "resultadosLaboratorio"=> $row["Resultados_Laboratorio"],
            "precio"=> $row["Precio_Total"],
		);
	}

	$jsonString = json_encode($json);

	echo $jsonString;

?>