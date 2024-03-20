<?php


include("../cors.php");
include('../connect_db.php');

//hacemos una consulta para obtener todos los datos de la tabla pacientes
$allPacientes = "SELECT * FROM paciente";

$ejecutarConsulta = mysqli_query( $connection, $allPacientes );

//creamos una variable de tipo arreglo para convertirlo en un json
$json = array();

	while($row = mysqli_fetch_array($ejecutarConsulta)){

		$json[] = array(

			'idPaciente' => $row['Codigo_paciente'],
			'nombrePaciente' => $row['Nombre_Paciente'],
            'apellidosPaciente' => $row['Apellidos_Paciente'],
			'fechaNacimientoPaciente' => $row['Fecha_Nacimiento'],
			'sexoPaciente' => $row['Sexo'],
			'pesoPaciente' => $row['Peso'],
			'alturaPaciente' => $row['altura'],
			'telefonoPaciente' => $row['Telefono'],
			'direccionPaciente'=> $row['Direccion'],
			'alergiaPaciente'=> $row['Alergia'],
			'nacionalidadPaciente'=> $row['Nacionalidad'],
			'tipoPaciente' => $row['Cod_TipoPaciente'],
		);
	}

	$jsonString = json_encode($json);

	echo $jsonString;

?>