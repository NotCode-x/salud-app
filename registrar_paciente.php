<?php


include("cors.php");
include('connect_db.php');

$codigo = $_POST['codigo'];
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

$consultaInsertarDatos = "INSERT INTO paciente (Cod_TipoPaciente, Nombre_Paciente, Apellidos_Paciente, Fecha_Nacimiento, Sexo, Peso, altura, Telefono, Direccion, Alergia, Nacionalidad)
                                    VALUES('PNTL', '$nombre', '$apellidos', '$fechaNacimiento', '$sexo', '$peso', '$altura', '$telefono', '$direccion', '$alergia', '$nacionalidad')";


$ejecutarConsulta = mysqli_query($connection, $consultaInsertarDatos);

if(!$ejecutarConsulta){
    echo 0;
}else{
    echo true;
}


?>