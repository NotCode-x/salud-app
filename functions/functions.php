<?php

function agregarPacienteLaboratorio($id, $cod, $pruebas, $conn)
{
    $consulta = "INSERT INTO laboratorio (Numero_Consulta, Cod_TecnicoLaboratorio, Codigo_Laboratorio, Pruebas)
                                    VALUES('$id', 'PMED1', '$cod', '$pruebas')";

    $ejecutarConsulta = mysqli_query($conn, $consulta);
}

function actualizarConsultaLaboratorio($id, $resultados, $conn)
{
    $consulta = "UPDATE consultas SET Estado_Consulta = 'Resultados y análisis', Resultados_Laboratorio = '$resultados' WHERE Numero_Consulta = '$id'";

    $ejecutarConsulta = mysqli_query($conn, $consulta);
}


function actualizarResultadoConsulta($id,$conn)
{
    $consulta = "UPDATE consultas SET Estado_Consulta = 'Finalizado' WHERE Numero_Consulta = '$id'";

    $ejecutarConsulta = mysqli_query($conn, $consulta);
}

function actualizarStockMedicamento($id, $stock, $conn){
    $consulta = "UPDATE medicamento SET stock = '$stock' WHERE Codigo_Medicamento = '$id'";

    $ejecutarConsulta = mysqli_query($conn, $consulta);
}

function actualizarVentaMedicamento($id, $codF, $conn){
    $consulta = "INSERT INTO venta_medicamento () values ('$codF', '$id') ";

    $ejecutarConsulta = mysqli_query($conn, $consulta);
}
