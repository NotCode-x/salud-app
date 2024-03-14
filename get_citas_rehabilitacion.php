<?php

include("cors.php");
include('connect_db.php');

//hacemos una consulta para obtener todos los datos de la tabla pacientes
$allCitasRehabilitacion = "SELECT * FROM cita, paciente WHERE cita.Tipo_Cita = 'Rehabilitación' AND cita.Cod_Paciente = paciente.Codigo_paciente";

$ejecutarConsulta = mysqli_query( $connection, $allCitasRehabilitacion );

//creamos una variable de tipo arreglo para convertirlo en un json
$json = array();

	while($row = mysqli_fetch_array($ejecutarConsulta)){

		$json[] = array(

			'codigoPaciente' => $row['Codigo_paciente'],
			'nombrePaciente' => $row['Nombre_Paciente'],
            'apellidosPaciente' => $row['Apellidos_Paciente'],
			'codigoMedico' => $row['Cod_Medico'],
			'codigoCita' => $row['Codigo_Cita'],
			'estadoCita' => $row['Estado'],
		);
	}

	$jsonString = json_encode($json);

	echo $jsonString;

?>