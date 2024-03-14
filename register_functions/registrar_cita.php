<?php


include("../cors.php");
include('../connect_db.php');

$codigoPaciente = $_POST['codigoPaciente'];
$codigoMedico = $_POST['codigoMedico'];
$hora = $_POST['hora'];
$fecha = $_POST['fecha']." ".$hora;
$tipoCita = $_POST['$tipoCita'];

$consultaInsertarDatos = "INSERT INTO cita (Fecha_Prevista, Cod_Paciente, Cod_Medico, Tipo_Cita, Estado)
                                    VALUES('$fecha', '$codigoPaciente', '$codigoMedico', '$tipoCita', 'En proceso')";


$ejecutarConsulta = mysqli_query($connection, $consultaInsertarDatos);

if(!$ejecutarConsulta){
    echo 0;
}else{
    echo 1;
}


?>