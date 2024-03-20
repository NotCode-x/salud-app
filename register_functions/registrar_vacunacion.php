<?php


include("../cors.php");
include('../connect_db.php');

$codigoAuxiliar = $_POST['codigoAuxiliar'];
$codigoPaciente = $_POST['codigoPaciente'];
$fechaVisita = $_POST['fechaVisita'];
$vacunas = $_POST['vacunas'];
$nombrePadre = $_POST['nombrePadre'];
$nombreMadre = $_POST['nombreMadre'];
$direccion = $_POST['direccion'];
$telefono = $_POST['telefono'];


$consultaInsertarDatos = "INSERT INTO registro_vacunacion  ( Cod_auxiliar, Cod_Paciente, Fecha_Visita, Vacunas_Recibidas, Nombre_Padre, Nombre_Madre, Direccion, Telefono)
                                    VALUES('$codigoAuxiliar', '$codigoPaciente', '$fechaVisita', '$vacunas', '$nombrePadre', '$nombreMadre', '$direccion','$telefono')";


$ejecutarConsulta = mysqli_query($connection, $consultaInsertarDatos);

if(!$ejecutarConsulta){
    echo 0;
}else{
    echo 1;
}


?>