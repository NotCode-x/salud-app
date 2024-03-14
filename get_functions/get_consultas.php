<?php


include("../cors.php");
include('../connect_db.php');

//hacemos una consulta para obtener todos los datos de la tabla pacientes
$allPacientes = "SELECT consultas.*, paciente.Nombre_Paciente AS Nombre, paciente.Codigo_paciente AS Codigo_paciente, paciente.Apellidos_Paciente AS Apellidos_Paciente
                    FROM consultas
                    INNER JOIN paciente ON consultas.Cod_paciente = paciente.Codigo_paciente";

$ejecutarConsulta = mysqli_query( $connection, $allPacientes );

//creamos una variable de tipo arreglo para convertirlo en un json
$json = array();

	while($row = mysqli_fetch_array($ejecutarConsulta)){

		$json[] = array(

            'numeroConsulta' => $row['Numero_Consulta'],
			'idPaciente' => $row['Codigo_paciente'],
			'nombrePaciente' => $row['Nombre'],
            'apellidosPaciente' => $row['Apellidos_Paciente'],
            'diagnosticoConsulta' => $row['Diagnostico'],
            'estadoConsulta' => $row['Estado_Consulta'],
            'estadoPaciente' => $row['Estado_Paciente'],
            'pruebasLaboratorio' => $row['Pruebas_Laboratorio'],
		);
	}

	$jsonString = json_encode($json);

	echo $jsonString;

?>