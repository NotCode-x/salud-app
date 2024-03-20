<?php


include("../cors.php");
include('../connect_db.php');

$idPaciente = $_POST['idPaciente'];

//hacemos una consulta para obtener todos los datos de la tabla pacientes
$consultaHistorial = "SELECT * FROM rehabilitacion WHERE Cod_paciente='$idPaciente' AND Estado = 'Rehabilitado'";

$ejecutarConsulta = mysqli_query( $connection, $consultaHistorial );

//creamos una variable de tipo arreglo para convertirlo en un json
$json = array();

	while($row = mysqli_fetch_array($ejecutarConsulta)){

		$json[] = array(

            'tipoRehabilitacion' => $row['Tipo_Rehabilitacion'],
            'tipoLesion' => $row['Tipo_lesion'],
            'progreso' => $row['Progreso'],
            'fecha' => $row['Fecha_Realizacion'],
            
		);
	}

	$jsonString = json_encode($json);

	echo $jsonString;

?>