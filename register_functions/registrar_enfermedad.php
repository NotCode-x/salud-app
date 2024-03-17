<?php


include("../cors.php");
include('../connect_db.php');
include('../functions/functions.php');

$nombre = $_POST['nombre'];
$tipo = $_POST['tipo'];
$sintomas = $_POST['sintomas'];
$descripcion = $_POST['descripcion'];
$receta = $_POST['receta'];
$id = $_POST['id'];

$consultaInsertarDatos = "INSERT INTO enfermedad (Nombre_Enfermedad, Descripcion, Sintomas, Tipo_Enfermedad, Receta, Numero_Consulta)
                                    VALUES( '$nombre', '$descripcion', '$sintomas', '$tipo', '$receta', '$id')";


$ejecutarConsulta = mysqli_query($connection, $consultaInsertarDatos);

if(!$ejecutarConsulta){
    echo 0;
}else{
    actualizarResultadoConsulta($id, $connection);
    echo 1;
}

?>