<?php

include("../cors.php");
include('../connect_db.php');
include('../functions/functions.php');


$idConsulta = $_POST['idConsulta'];
$diagnostico = $_POST['diagnostico'];
$pruebas_lab = $_POST['pruebasLaboratorio'];

//ejecutamos la consulta para actualizar los campos previstos
$consultaUpdate = "UPDATE consultas SET Diagnostico = '$diagnostico', Pruebas_Laboratorio = '$pruebas_lab', Estado_Consulta = 'Pruebas y análisis' WHERE Numero_Consulta = '$idConsulta'";

$ejecutarConsulta = mysqli_query( $connection, $consultaUpdate );



if(!$ejecutarConsulta){
    echo 0;
}else{
    agregarPacienteLaboratorio($idConsulta, $pruebas_lab, $connection);
    echo 1;
}

?>