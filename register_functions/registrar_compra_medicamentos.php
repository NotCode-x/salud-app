<?php


include("../cors.php");
include('../connect_db.php');
include('../functions/functions.php');

$idMedicamento =  $_POST['idMedicamento'];
$nombreMedicina = $_POST['nombreMedicina'];
$codigoFarmaceutico = $_POST['codigoPersonal'];
$cantidadStock = $_POST['stock'];
$cantidadCompra = $_POST['cantidad'];
$precioUnitario = $_POST['precioUnitario'];
$codigoFarmacia = $_POST['codigoFarmacia'];

$stockActual = $cantidadStock - $cantidadCompra;
$precioTotal = $cantidadCompra * $precioUnitario;

$consultaInsertarDatos = "INSERT INTO farmacia (Codigo_Farmacia, Cod_farmaceutico, Cantidad_Stock, Cantidad_Vendida, Precio_Total)
                                    VALUES( '$codigoFarmacia', '$codigoFarmaceutico', '$stockActual', '$cantidadCompra', '$precioTotal')";


$ejecutarConsulta = mysqli_query($connection, $consultaInsertarDatos);

if(!$ejecutarConsulta){
    echo 0;
}else{
    actualizarStockMedicamento($idMedicamento, $stockActual, $connection);
    actualizarVentaMedicamento($idMedicamento, $codigoFarmacia, $connection);
    echo 1;
}

?>