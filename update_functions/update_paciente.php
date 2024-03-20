<?php


include("../cors.php");
include('../connect_db.php');

$idPaciente = $_POST['idPaciente'];
$codigo = $_POST['codigoTipoPaciente'];
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$fechaNacimiento = $_POST['fechaNacimiento'];
$sexo = $_POST['sexo'];
$peso = $_POST['peso'];
$altura = $_POST['altura'];
$telefono = $_POST['telefono'];
$direccion = $_POST['direccion'];
$alergia = $_POST['alergia'];
$nacionalidad = $_POST['nacionalidad'];

$consultaInsertarDatos = "UPDATE paciente SET Cod_TipoPaciente = '$codigo', Nombre_Paciente = '$nombre', Apellidos_Paciente = '$apellidos', Fecha_Nacimiento = '$fechaNacimiento', Sexo='$sexo', Peso='$peso', altura='$altura', Telefono='$telefono', Direccion='$direccion', Alergia='$alergia', Nacionalidad='$nacionalidad' WHERE Codigo_paciente = '$idPaciente'";


$ejecutarConsulta = mysqli_query($connection, $consultaInsertarDatos);

if(!$ejecutarConsulta){
    echo 0;
}else{
    echo true;
}

?>