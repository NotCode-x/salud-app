<?php


include("cors.php");
include('connect_db.php');

$codigoCita = $_POST['codigoCita'];
$codigoPaciente = $_POST['codigoPaciente'];
$codigoPersonal = $_POST['codigoPersonal'];
$fechaRealizacion = $_POST['fechaRealizacion'];
$tipoRehabilitacion = $_POST['tipoRehabilitacion'];
$nombrePaciente = $_POST['nombrePaciente'];
$diasSemana = $_POST['diasSemana'];
$horaCita = $_POST['horaCita'];
$numeroHorasSemana = $_POST['numeroHorasSemana'];
$tipoLesion = $_POST['tipoLesion'];
$causaLesion = $_POST['causaLesion'];
$progreso = $_POST['progreso'];



$consultaInsertarDatos = "INSERT INTO rehabilitacion(Cod_Cita, Fecha_Realizacion, Cod_paciente, Nombre_Paciente, Cod_Personal, Tipo_Rehabilitacion, Dias_Semana, Hora_cita, Numero_Horas_Semana, Tipo_lesion, Causa_lesion, Progreso, Estado) 
                                 VALUES ('$codigoCita','$fechaRealizacion','$codigoPaciente','$nombrePaciente','$codigoPersonal','$tipoRehabilitacion','$diasSemana','$horaCita','$numeroHorasSemana','$tipoLesion','$causaLesion','$progreso', 'Rehabilitado')";


$ejecutarConsulta = mysqli_query($connection, $consultaInsertarDatos);

if(!$ejecutarConsulta){
    echo 0;
}else{
    echo 1;
}


?>