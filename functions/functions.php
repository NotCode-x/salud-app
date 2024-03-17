<?php



function agregarPacienteLaboratorio($id, $pruebas, $conn)
{
    $consulta = "INSERT INTO laboratorio (idConsulta, Cod_TecnicoLaboratorio, Pruebas)
                                    VALUES('$id', 'PMED1', '$pruebas')";

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
