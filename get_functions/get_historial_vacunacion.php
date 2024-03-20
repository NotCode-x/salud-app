<?php


include("../cors.php");
include('../connect_db.php');

$idPaciente = $_POST['idPaciente'];

//hacemos una consulta para obtener todos los datos de la tabla pacientes
$consultaHistorial = "SELECT * FROM registro_vacunacion WHERE Cod_Paciente='$idPaciente'";

$ejecutarConsulta = mysqli_query( $connection, $consultaHistorial );

//creamos una variable de tipo arreglo para convertirlo en un json
$json = array();

	while($row = mysqli_fetch_array($ejecutarConsulta)){

		$json[] = array(

            'vacuna' => $row['Vacunas_Recibidas'],
            'fecha' => $row['Fecha_Visita'],
            
		);
	}

	$jsonString = json_encode($json);

	echo $jsonString;

?>