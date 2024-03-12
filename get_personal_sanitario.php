<?php


include("cors.php");
include('connect_db.php');

//hacemos una consulta para obtener todos los datos de la tabla pacientes
$allPacientes = "SELECT * FROM personal_sanitario";

$ejecutarConsulta = mysqli_query( $connection, $allPacientes );

//creamos una variable de tipo arreglo para convertirlo en un json
$json = array();

	while($row = mysqli_fetch_array($ejecutarConsulta)){

		$json[] = array(

			'codigoPersonal' => $row['Codigo_Personal'],
			'codigoAreaTrabajo' => $row['Cod_AreaTrabajo'],
            'nombrePersonal' => $row['Nombre_Personal'],
		);
	}

	$jsonString = json_encode($json);

	echo $jsonString;

?>