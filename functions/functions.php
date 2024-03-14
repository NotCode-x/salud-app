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
