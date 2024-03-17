<?php


include("../cors.php");
include('../connect_db.php');

//hacemos una consulta para obtener todos los datos de la tabla pacientes
$allPacientes = "SELECT * FROM medicamento";

$ejecutarConsulta = mysqli_query( $connection, $allPacientes );

//creamos una variable de tipo arreglo para convertirlo en un json
$json = array();

//iteramos todas las filas
	while($row = mysqli_fetch_array($ejecutarConsulta)){

        //agregamos al arreglo todos los datos en forma de objeto
		$json[] = array(

			'idMedicamento' => $row['Codigo_Medicamento'],
			'nombreMedicamento' => $row['Nombre_medicamento'],
            'fabricante' => $row['Fabricante'],
            'numeroLote' => $row['Numero_Lote'],
            'composicion' => $row['Composicion'],
            'observaciones' => $row['Observaciones'],
            'fechaFabricacion' => $row['Fecha_Fabricacion'],
            'fechaVencimiento' => $row['Fecha_Vencimiento'],
            'precioUnitario' => $row['Precio_Unitario'],
            'stock' => $row['stock'],
		);
	}

	$jsonString = json_encode($json);

	echo $jsonString;

?>