<?php

include("../cors.php");
include('../connect_db.php');
include('functions/functions.php');


$idConsulta = $_POST['idConsulta'];
$resultados_lab = $_POST['resultadosLaboratorio'];
$precioTotal = $_POST['precio'];


//ejecutamos la consulta para actualizar los campos previstos
$consultaUpdate = "UPDATE laboratorio SET Precio_Total = '$precioTotal', Resultados_Laboratorio = '$resultados_lab' WHERE Numero_Consulta = '$idConsulta'";

$ejecutarConsulta = mysqli_query( $connection, $consultaUpdate );



if(!$ejecutarConsulta){
    echo 0;
}else{
    actualizarConsultaLaboratorio($idConsulta, $resultados_lab, $connection);
    echo 1;
}

?>