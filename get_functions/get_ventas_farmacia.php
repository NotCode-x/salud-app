<?php


include("../cors.php");
include('../connect_db.php');

//hacemos una consulta para obtener todos los datos de la tabla pacientes
$allPacientes = "SELECT venta_medicamento.*, farmacia.*, medicamento.* FROM medicamento
                    INNER JOIN farmacia 
                    INNER JOIN venta_medicamento
                    WHERE farmacia.codigo_Farmacia = venta_medicamento.Cod_Farmacia AND venta_medicamento.Cod_Medicamento = medicamento.Codigo_Medicamento
                    ";

$ejecutarConsulta = mysqli_query( $connection, $allPacientes );

//creamos una variable de tipo arreglo para convertirlo en un json
$json = array();

	while($row = mysqli_fetch_array($ejecutarConsulta)){

		$json[] = array(

            'nombreMedicamento' => $row['Nombre_medicamento'],
            'cantidadVendida' => $row['Cantidad_Vendida'],
            'precio' => $row['Precio_Total'],
			
		);
	}

	$jsonString = json_encode($json);

	echo $jsonString;

?>