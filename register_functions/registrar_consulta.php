<?php


include("../cors.php");
include('../connect_db.php');

$codigoPaciente = $_POST['codigoPaciente'];
$codigoMedico = $_POST['codigoMedico'];

$consultaInsertarDatos = "INSERT INTO consultas ( Cod_Paciente, Cod_Medico, Cod_TipoConsulta, Estado_Consulta)
                                    VALUES('$codigoPaciente', '$codigoMedico', 'NRM', 'En espera')";


$ejecutarConsulta = mysqli_query($connection, $consultaInsertarDatos);

if(!$ejecutarConsulta){
    echo 0;
}else{
    echo 1;
}


?>