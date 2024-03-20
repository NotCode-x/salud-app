<?php


include("../cors.php");
include('../connect_db.php');

$idPaciente = $_POST['idPaciente'];


//hacemos una consulta para obtener todos los datos de la tabla pacientes
$consultaHistorial = "SELECT * FROM consultas WHERE Cod_paciente = '$idPaciente' AND Estado_Consulta = 'Finalizado' ";

$ejecutarConsulta = mysqli_query( $connection, $consultaHistorial );

//creamos una variable de tipo arreglo para convertirlo en un json
$json = array();

	while($row = mysqli_fetch_array($ejecutarConsulta)){

		$json[] = array(

			'numeroConsulta' => $row['Numero_Consulta'],
            'diagnosticoConsulta' => $row['Diagnostico'],
            'pruebasLaboratorio' => $row['Pruebas_Laboratorio'],
            'fechaConsulta' => $row['Hora_Realizada'],
            'resultadosConsulta' => $row['Resultados_Laboratorio']
		);
	}

	$jsonString = json_encode($json);

	echo $jsonString;

?>