<?php


include("../cors.php");
include('../connect_db.php');

$idPaciente = $_POST['idPaciente'];
//hacemos una consulta para obtener todos los datos de la tabla pacientes
$consultaHistorial = "SELECT * FROM cita WHERE Cod_Paciente = '$idPaciente'";

$ejecutarConsulta = mysqli_query( $connection, $consultaHistorial );

//creamos una variable de tipo arreglo para convertirlo en un json
$json = array();

	while($row = mysqli_fetch_array($ejecutarConsulta)){

		$json[] = array(

			'tipoCita' => $row['Tipo_Cita'],
            'fecha' => $row['Fecha_Prevista'],
		);
	}

	$jsonString = json_encode($json);

	echo $jsonString;

?>