/*drop database Gestion_H;*/ 
create database  Gestion_H;
use Gestion_H;

              /**************************** CREACIÓN DE LAS TABLAS*********************************/
create table Usuario(
Codigo_usuario int primary key auto_increment,
Nombre_Usuario varchar(20),
contrasenia tinyint (6));

CREATE TABLE Tipo_Consulta (
    Codigo_TipoConsulta CHAR(5) PRIMARY KEY NOT NULL,
    Descripcion VARCHAR(10)
);
 
create table Tipo_Paciente(
Codigo_TipoPaciente char(5) primary key not null,
Descripcion varchar(25)); 

create table Especialidad(
Codigo_Especialidad int auto_increment primary key not null,
Nombre_Especialidad varchar(50) not null);

create table Consultorio(
Codigo_Consultorio int auto_increment primary  key not null,
Nombre_Consultorio varchar(15) not null);

create table Areas(
Codigo_Area char(10) primary  key not null,
Nombre_Area varchar(100) not null);
              
create table Registro(
Codigo_registro int auto_increment primary key not null,
Area_Trabajo char(10),
Fecha_Registro datetime null default current_timestamp,
Cod_Personal char(10) not null,
Cod_paciente int not null,
Cod_Cita int,
Consultorio_Asignado int not null);

create table Paciente(
Codigo_paciente int auto_increment primary key not null,    
Cod_TipoPaciente char(5) not null,          
Nombre_Paciente varchar(50) not null,
Apellidos_Paciente varchar (50) not null,
Fecha_Nacimiento date not null,
Sexo char(1) not null,
Peso varchar(7),
altura varchar(7),
Telefono numeric not null,
Direccion varchar(100)not null,
Alergia varchar(100) not null,
Nacionalidad varchar(25),
Lugar_Nacimiento varchar(100),
Provincia varchar (15),
Distrito varchar(25),
Hospital_Procedencia varchar(50));

create table Control_Prenatal(
Numero_MujerPrenatal int auto_increment primary key not null,
Cod_Paciente int not null,
Cod_volanteResultados int,
Estado_Civil varchar(10) not null,
Nivel_Formacion varchar (50),
Semanas_Gestacion varchar(10) not null,
Numero_CPN int,
Numero_partos int,
Numero_abortos int );

create table Consultas(
Numero_Consulta int primary key not null auto_increment,
Cod_paciente int not null,
Cod_medico char (10) not null,
Cod_TipoConsulta Char(5) not null,
Fecha_Realizada date,
Hora_Realizada  timestamp, 
Diagnostico varchar(200) not null);

create table Cita(
Codigo_Cita int auto_increment primary key not null,
Fecha_Prevista datetime,
Cod_Paciente int not null,
Cod_Medico char(10) not null);

create table Medico(
Codigo_Medico char(10) primary key not null,
Cod_Personal char(10) not null,
Nombre_Medico varchar(100) not null,
Apellidos_Medico varchar(100),
Telefono numeric not null,
Domicillo varchar(100) not null,
Fecha_nacimiento date,
Email varchar(100),
Sexo char (1) not null,
DIP_Pasaporte int not null);

Create table Personal_Sanitario(
Codigo_Personal char(10) primary key not null,
Cod_AreaTrabajo char(10) not null,
Nombre_Personal Varchar(50) not null,
Apellidos_Personal varchar(50) not null,
Fecha_Nacimiento date not null,
Direccion varchar(100),
Sexo char(1) not null,
Telefono numeric not null,
DIP_Pasaporte numeric not null);

create table Registro_Vacunacion(
NumeroUnico_Carnet int auto_increment primary key not null,
Cod_auxiliar char(10) not null,
Cod_Paciente int,
Vacunas_Recibidas char(5),
Fecha_1ª_Visita date,
Fecha_2ª_Visita date,
Fecha_3ª_Visita date,
Fecha_4ª_Visita date,
Fecha_5ª_Visita date,
Fecha_6ª_Visita date,
Fecha_7ª_Visita date,
Nombre_Padre varchar (50),
Nombre_Madre varchar (50),
Direccion varchar(25),
Telefono numeric);

Create table Receta(
Codigo_Receta int primary key auto_increment not null,
Cod_Medico char(10) not null,
Cod_Paciente int not null,
Cod_Medicamento int not null, /** pueden ser varios pondrenos un checbox***/
Dias_tratamiento int,
Dosis_Diarias varchar(50), /** pueden ser varios pondrenos un checbox***/
Fecha datetime null default current_timestamp);

/** En esta tabla se recogen los nombres de todas las enfermedades conocidas y se podran añadir las nuevas enfermedades que se vayan descubriendo*/
Create table Enfermedad(
Codigo_Enfermedad int auto_increment primary key not null,
Nombre_Enfermedad varchar(50),
Descripcion varchar(100),
Sintomas varchar(100),
Tipo_Enfermedad varchar(100));


/** esta tabla contiene todas las pruebas medicas que se le pueden realizar a un paciente en un hospital*/
/** En esta tabla se van a enumerar todas las posibles pruebas que se puedan realizar en un laboratorio normal y completo**/
Create table Lista_Pruebas(
Codigo_Prueba int auto_increment primary key not null,
Nombre_prueba varchar (100),
Fecha_Solicitud datetime null default current_timestamp);  /*** DESDE ESTA TABLA SE SELECCIONAN TODAS LAS PRUEBAS A REALIZAR AL PACIENTE***/

/***** el medico es quien entrega esto al paciente para solicitar pruebas en el laboratorio*******/
/**** este formulario con las pruebas a realizar el paciente lo lleva al laboratorio para realizarse las pruebas */
 /******Create table Prueba_Solicitada(
Codigo_PruebaSolicitada int primary key auto_increment not null,
Cod_Medico Char(10) not null,
Pruebas_a_Realizar varchar(50) not null, PONDREMOS UN CHECBOX DE LA LISTA DE PRUEBAS
Fecha_Solicitud date,
fecha_Realizada Date);****/

create table Antigenos(
Codigo_antigeno char(5) primary  key not null,
Nombre varchar(25) not null,
Descripcion varchar(50),
Para_Quienes varchar(25));

create table Volante_Resultados(
Codigo_Volante int auto_increment primary key not null,
Cod_TecnicoLaboratorio char(10) not null,
Cod_paciente int not null,
Cod_ListaPruebas int,
Fecha_Entregada datetime null default current_timestamp,
Resultado varchar(500));

create table Medicamento(
Codigo_Medicamento int auto_increment primary key not null,
Nombre_medicamento varchar(50) not null,
Fabricante varchar(15),
Numero_Lote char(25),
Composicion varchar(100),
Observaciones varchar(200) not null,
Fecha_Fabricacion date not null,
Fecha_Vencimiento date not null);

create table Horarios(
Codigo_Horario Char(10) primary key not null,
Cod_AreaTrabajo char(10),
Personal_Asignado char(10) not null,
Dia_Semana varchar (25),
Fecha_entrada date,
Fechahora_entrada timestamp,
FechaHora_Salida datetime); /** tiene relacion con la tabla PERSONAL SANITARIO***/

create table Historial_Medico_paciente(
Numero_Historial int auto_increment primary key not null,
Cod_Paciente int not null,
Cod_Medico char(10) not null,
Cod_VolanteResultados int not null
);

/** relacionado con empleados*/ 
create table Farmacia(
Codigo_Farmacia char(5) primary  key not null,
Cod_Farmaceutico char(7) not null,
Fecha_Venta datetime null default current_timestamp,
Cantidad_Stock int,
Cantidad_Vendida int,
Precio_Total float); 

/*tabla de productos de todo el hispital incluida la farmacia*/
create table Inventario(
Codigo_Inventario int auto_increment primary  key not null,
Fecha_Inventario datetime null default current_timestamp,
Cod_Personal char(10) not null,
Cod_Medicamento int, 
Nombre_producto varchar(50) not null,
Cantidad_Inicio int,
Cantidad_Vendida int,
Cantidad_Stock int); 

/** relacionado con PERSONAL SANITARIO*/
create table Laboratorio(
Codigo_Laboratorio char(5) primary  key not null,
Cod_TecnicoLaboratorio char(10) not null,
Numero_Pruebasrealizadas int not null,
Fecha_Prueba datetime null default current_timestamp,
Precio_Total int);

create table Caja(
Codigo_Caja char(5) primary key not null,
Cod_Personal char(10) not null,
Fecha_pago datetime null default current_timestamp,
Concepto_Pago varchar(100) not null,
Pago_total int);

create table Ingreso(
Codigo_Ingreso int auto_increment primary key not null,
Cod_Paciente int not null,
Cod_Medico Char(10) not null,
Nombre_Sala varchar(50) not null,
Numero_Habitacion int not null,
Numero_Cama int not null,
Fecha_Ingreso date,
Hora_Ingreso timestamp,
Motivo_Ingreso varchar(200),
Fecha_Salida datetime);

create table Visitas(
Numero_Visitante int auto_increment primary key not null,
Nombre_Visitante varchar(100) not null,
DIP int not null,
Parentesco varchar(15) not null,
Cod_Paciente int not null,
Cod_Personal Char(10) not null,
fechaHora_Visita datetime null default current_timestamp);

create table Vacaciones(
Codigo_Vacaciones int auto_increment primary key not null,
Cod_Personal char(10) not null,
Fecha_Solicitada date not null,
Fecha_Concedida date,
Fecha_Final date,
Motivo varchar(50));

create table Tanatorio(
CodigoUnico_Tanatorio char(10) primary key not null,
Cod_Personal Char(10) not null,
Cod_Paciente int not null,
Fecha_Fallecimiento date,
Hora_Fallecimiento timestamp,
Tipo_muerte varchar(100));

create table Registro_Partos(
Numero_Parto int auto_increment primary key not null,
Cod_Personal char(10) not null,
Nombre_Bebe varchar(50),
Fecha_Parto date,
Hora_Parto timestamp,
Sexo char(1) not null, 
Peso varchar(7),
Altura varchar(7),
Observación varchar(200));

create table Rehabilitacion(
Codigo_Rehabilitacion int primary key auto_increment not null,
Cod_Cita int,
Fecha_Realizacion date,
Cod_paciente int,
Nombre_Paciente varchar(100),
Cod_Personal char(10) not null,
Tipo_Rehabilitacion varchar(200) not null,
Dias_Semana varchar(100),
Hora_cita time,
Numero_Horas_Semana int,
Tipo_lesion varchar(200),
Causa_lesion varchar(150),
Progreso varchar(200)
);


 
 /********************************* CREACION DE LAS TABLAS RELACION *************************************/
 
 create table Especialidad_Adquirida(
 Cod_Especialidad int,
 Cod_Medico char(10),
foreign key(Cod_Medico) references Medico(Codigo_Medico), 
foreign key( Cod_Especialidad) references Especialidad (Codigo_Especialidad),
primary  key(Cod_Medico,Cod_Especialidad));


create table Realizar_Pruebas(
Cod_Prueba int,
Cod_Medico char(10),
foreign key(Cod_Medico) references Medico(Codigo_Medico), 
foreign key(Cod_Prueba) references Lista_Pruebas(Codigo_Prueba),
primary  key(Cod_Medico, Cod_Prueba));


Create table Asignacion(
Cod_Paciente int,
Cod_Medico Char(10),
 foreign key(Cod_Medico) references Medico(Codigo_Medico),
foreign key( Cod_Paciente) references Paciente(Codigo_Paciente),
primary  key(Cod_Medico, Cod_Paciente));

Create table Compra_Medicamento(
Cod_Paciente int,
Cod_Medicamento int,
 foreign key(Cod_Medicamento) references Medicamento(Codigo_Medicamento),
foreign key( Cod_Paciente) references Paciente(Codigo_Paciente),
primary  key(Cod_Medicamento, Cod_Paciente));

Create table Venta_Medicamento(
Cod_Farmacia char(5),
Cod_Medicamento int,
 foreign key(Cod_Medicamento) references Medicamento(Codigo_Medicamento),
foreign key( Cod_Farmacia) references Farmacia(Codigo_Farmacia),
primary  key(Cod_Medicamento, Cod_Farmacia));


Create table Dispensacion(
Cod_Farmacia Char(10),
Cod_Receta int,
 foreign key(Cod_Receta) references Receta(Codigo_Receta),
foreign key( Cod_Farmacia) references Farmacia(Codigo_Farmacia),
primary  key(Cod_Receta, Cod_Farmacia));


Create table Inventario_Farmacia(
Cod_Inventario int,
Cod_Farmacia Char(10),
 foreign key(Cod_Inventario) references Inventario(Codigo_Inventario),
foreign key( Cod_Farmacia) references Farmacia(Codigo_Farmacia),
primary  key(Cod_Inventario, Cod_Farmacia));

Create table Enfermedad_Diagnosticada(
Cod_Medico char(10),
Cod_Enfermedad int,
foreign key(Cod_Medico) references Medico(Codigo_Medico),
foreign key( Cod_Enfermedad) references Enfermedad(Codigo_Enfermedad),
primary  key(Cod_Medico, Cod_Enfermedad));

Create table Consultorio_Medico(
Cod_Medico char(10),
Cod_Consultorio int,
foreign key(Cod_Medico) references Medico(Codigo_Medico),
foreign key( Cod_Consultorio) references Consultorio(Codigo_Consultorio),
primary  key(Cod_Medico, Cod_Consultorio));

Create table Alumbramientos(
Cod_Paciente int,
Num_Parto int,
 foreign key(Num_Parto) references Registro_Partos(Numero_Parto),
foreign key( Cod_Paciente) references Paciente(Codigo_Paciente),
primary  key(Num_Parto, Cod_Paciente));

Create table Paciente_Laboratorio(
Cod_paciente int,
Cod_Laboratorio  char(10),
foreign key(Cod_paciente) references Paciente(Codigo_paciente),
foreign key(Cod_Laboratorio ) references Laboratorio (Codigo_Laboratorio ), 
primary  key(Cod_paciente, Cod_Laboratorio )
);

Create table Todos_Resultados(
Cod_Laboratorio Char(5),
Cod_VolanteResultados int,
foreign key(Cod_Laboratorio) references Laboratorio(Codigo_Laboratorio),
foreign key(Cod_VolanteResultados) references Volante_Resultados (Codigo_Volante), 
primary  key(Cod_Laboratorio, Cod_VolanteResultados)
);


Create table Paciente_Caja(
Cod_paciente int,
Cod_Caja char(10),
foreign key(Cod_paciente) references Paciente(Codigo_paciente),
foreign key(Cod_Caja) references Caja(Codigo_Caja), 
primary  key(Cod_paciente, Cod_Caja)
);

Create table Enfermedad_Padecida(
Cod_Paciente int,
Cod_Enfermedad int,
 foreign key( Cod_Enfermedad) references Enfermedad(Codigo_Enfermedad),
foreign key( Cod_Paciente) references Paciente(Codigo_Paciente),
primary  key(Cod_Enfermedad, Cod_Paciente));


/****** RELACIONES DIRECTAS  ********/
-- TABLAS REALACIONADAS DIRECTAMENTE
/********************************
Registro_Vacunacion--Paciente
Registro_Vacunacion--Personal_Sanitario 
Registro_Vacunacion--Antigeno
Laboratorio--Personal_Sanitario
Registro_Partos--Personal_Sanitario
Control_Prenatal--Paciente
Control_Prenatal--Volante_Resultados
Volante_Resultados--Paciente
Volante_Resultados--Lista_Pruebas
Ingreso--Paciente
Ingreso--Medico 
Consultas--Paciente 
Consultas--Medico
Consultas--Tipo_Consulta
Historial_Medico_paciente--Paciente 
Historial_Medico_paciente--Medico
Historial_Medico_paciente--Volante_Resultados
Cita--Paciente
Cita--Medico
Reistro--Personal_Sanitario
Registro--Paciente 
Registro--Areas
Registro--Cita
Registro--Consultorio
Visitas--Personal_Sanitario
Visitas--Paciente 
Receta--Medico
Receta--Paciente 
Receta--Medicamento
Tanatorio--Personal_Sanitario
Tanatorio--Paciente 
Horario--Personal_Sanitario
Vacaciones--Personal_Sanitario
Farmacia--Personal_Sanitario
Medico--Personal_Sanitario
Caja-Personal_Sanitario
Personal_Sanitario-Areas
Paciente-Tipo_Paciente
Inventario-Medicamento
Inventario-Personal_Sanitario
Rehabilitación-Paciente
Rehabilitación-Cita
Rehabilitación-Personal

*****************************/

/**************************** EMPEZAMOS CON LA DIFERENTES RELACIONES ************************************/
alter table Registro_Vacunacion add foreign key (Cod_paciente) references Paciente (Codigo_paciente);
alter table Registro_Vacunacion add foreign key (Cod_auxiliar) references Personal_Sanitario (Codigo_Personal);
alter table Registro_Vacunacion add foreign key (Vacunas_Recibidas) references Antigenos (Codigo_Antigeno);
/********************************************************************************************************/
alter table Laboratorio add foreign key (Cod_TecnicoLaboratorio) references Personal_Sanitario (Codigo_Personal);
/********************************************************************************************************/
alter table Registro_Partos add foreign key (Cod_Personal) references Personal_Sanitario (Codigo_Personal);
/********************************************************************************************************/
alter table Control_Prenatal add foreign key (Cod_paciente) references Paciente (Codigo_paciente);
alter table Control_Prenatal add foreign key (Cod_VolanteResultados) references Volante_Resultados (Codigo_Volante);
/********************************************************************************************************/
alter table Volante_Resultados add foreign key (Cod_paciente) references Paciente (Codigo_paciente);
alter table Volante_Resultados add foreign key (Cod_ListaPruebas) references Lista_Pruebas(Codigo_Prueba);
/********************************************************************************************************/
alter table Ingreso add foreign key (Cod_paciente) references Paciente (Codigo_paciente);
alter table Ingreso add foreign key (Cod_Medico) references Medico (Codigo_Medico);
/********************************************************************************************************/
alter table Consultas add foreign key (Cod_paciente) references Paciente (Codigo_paciente);
alter table Consultas add foreign key (Cod_Medico) references Medico (Codigo_Medico);
alter table Consultas add foreign key (Cod_TipoConsulta) references Tipo_Consulta (Codigo_TipoConsulta);
/********************************************************************************************************/
alter table Historial_Medico_paciente add foreign key (Cod_Paciente) references Paciente (Codigo_Paciente);
alter table Historial_Medico_paciente add foreign key (Cod_Medico) references Medico (Codigo_Medico);
alter table Historial_Medico_paciente add foreign key (Cod_VolanteResultados) references Volante_Resultados (Codigo_Volante);
/********************************************************************************************************/
alter table Cita add foreign key (Cod_paciente) references Paciente(Codigo_Paciente);
alter table Cita add foreign key (Cod_Medico) references Medico (Codigo_Medico);
/********************************************************************************************************/
alter table Registro add foreign key (Cod_Personal) references Personal_Sanitario (Codigo_Personal);
alter table Registro add foreign key(Cod_Paciente) references Paciente (Codigo_Paciente);
alter table Registro add foreign key (Area_Trabajo) references Areas (Codigo_Area);
alter table Registro add foreign key (Cod_Cita) references Cita (Codigo_Cita);
alter table Registro add foreign key (Consultorio_Asignado) references Consultorio (Codigo_Consultorio);
/********************************************************************************************************/
alter table Visitas add foreign key (Cod_Personal) references Personal_Sanitario (Codigo_Personal);
alter table Visitas add foreign key (Cod_paciente) references Paciente (Codigo_paciente);
/********************************************************************************************************/
alter table Receta add foreign key (Cod_Medico) references Medico (Codigo_Medico);
alter table Receta add foreign key (Cod_paciente) references Paciente(Codigo_Paciente);
alter table Receta add foreign key (Cod_Medicamento) references Medicamento (Codigo_Medicamento);
/********************************************************************************************************/
alter table Tanatorio add foreign key (Cod_Personal) references Personal_Sanitario (Codigo_Personal);
alter table Tanatorio add foreign key (Cod_paciente) references Paciente (Codigo_paciente);
/********************************************************************************************************/
/********************************************************************************************************/
alter table Horarios add foreign key (Personal_Asignado) references Personal_Sanitario (Codigo_Personal);
alter table Horarios add foreign key (Cod_AreaTrabajo) references Areas (Codigo_Area);
/********************************************************************************************************/
alter table Vacaciones add foreign key (Cod_Personal) references Personal_Sanitario (Codigo_Personal);
/********************************************************************************************************/
alter table Farmacia add foreign key (Cod_Farmaceutico) references Personal_Sanitario (Codigo_Personal);
/********************************************************************************************************/
alter table Medico add foreign key (Cod_Personal) references Personal_Sanitario (Codigo_Personal);
/********************************************************************************************************/
alter table Caja add foreign key (Cod_Personal) references Personal_Sanitario (Codigo_Personal);
/********************************************************************************************************/
alter table Personal_Sanitario add foreign key (Cod_AreaTrabajo) references Areas (Codigo_Area);
/********************************************************************************************************/
alter table Paciente add foreign key (Cod_TipoPaciente) references Tipo_Paciente (Codigo_TipoPaciente);
/******************************************************************************************************/ 
alter table Inventario add foreign key (Cod_Medicamento) references Medicamento (Codigo_Medicamento);
alter table Inventario add foreign key (Cod_Personal) references Personal_Sanitario (Codigo_Personal);
/*******************************************************************************************************/
alter table Rehabilitacion add foreign key (Cod_paciente) references Paciente (Codigo_paciente);
alter table Rehabilitacion add foreign key (Cod_Personal) references Personal_Sanitario (Codigo_Personal);
alter table Rehabilitacion add foreign key (Cod_Cita) references Cita (Codigo_Cita);

/********************************************************************************************************/
show tables;
describe usuario;

							/******************* PROCEDIMIENTOS DE INSERCIÓN DE DATOS EN LAS TABLAS ******************************/
delimiter //
create procedure Nuevo_usuario(in a varchar(50), b tinyint) 
begin
insert into usuario (Nombre_Usuario, contrasenia) values (a,b);
end //
 delimiter ;
 call  Nuevo_usuario("Romania",12345); 
   /*******************  TABLA TIPO CONSULTA ******************************/                         
delimiter //
create procedure Nuevo_TipoConsulta(in a char(10),b varchar(10)) 
begin
insert into Tipo_Consulta() values (a,b);
end //
 delimiter ;
call Nuevo_TipoConsulta('URG',"Urgente"); 
call Nuevo_TipoConsulta('NRM',"Normal"); 
         
  /*******************  TABLA DE REGISTRO DEL TIPO DE CONSULTA QUE TENDRA EL PACIENTE CON SU MEDICO ******************************/  
delimiter //
create procedure Nuevo_TipoPaciente(in a char(5),b varchar(25)) 
begin
insert into Tipo_Paciente() values (a,b);
end //
delimiter ;
call Nuevo_TipoPaciente('PNTL', "Mujer embarazada");
call Nuevo_TipoPaciente('0-18M', "Paciente de 18 meses");


  /*******************  TABLA DE REGISTRO DE TODAS LAS ESPECIALIDADES MEDICAS ******************************/  
delimiter //
create procedure Nueva_Especialidad(in a varchar(50)) 
begin
insert into Especialidad(Nombre_Especialidad) values (a);
end //
delimiter ;
call Nueva_Especialidad('Ginecologo');

  /*******************  TABLA DE REGISTRO DE TODOS LOS CONSULTORIOS DEL CENTRO MEDICO ******************************/  
delimiter //
create procedure Nuevo_Consultorio(in a varchar(15)) 
begin
insert into Consultorio(Nombre_Consultorio) values (a);
end //
delimiter ;
call Nuevo_Consultorio('Ginecologia');

  /*******************  TABLA DE REGISTRO DE TODAS LAS AREAS SANITARIAS ******************************/  
delimiter //
create procedure Nueva_Area(in a char(10),b varchar(100)) 
begin
insert into Areas() values (a,b);
end //
delimiter ;
call Nueva_Area('AENFR1',"Area de Enfermeria de atencion de Laboratorio");
call Nueva_Area('AENFR2',"Area de Enfermeria de atencion de Vacunacion");
call Nueva_Area('AENFR3',"Area de Enfermeria de atencion de farmacia");
call Nueva_Area('AENFR4',"Area de Enfermeria de atencion de Registro");
call Nueva_Area('AMED1',"Area Medica de ginecologia");

  /*******************  TABLA DE REGISTRO DE TOSOS LOS PACIENTES ******************************/  
delimiter //
create procedure Paciente_Nuevo(in a char(5),b varchar(50),c varchar(50),d date,e Char(1),f varchar(7), g varchar(7), h numeric, i varchar(100), j varchar(100), k varchar(25), 
l varchar(100), m varchar(15), n varchar(25), o varchar(50)) 
begin
insert into Paciente(Cod_TipoPaciente,Nombre_Paciente,Apellidos_Paciente,Fecha_Nacimiento,Sexo,Peso,altura,Telefono,
Direccion,Alergia,Nacionalidad,Lugar_Nacimiento,Provincia,Distrito,Hospital_Procedencia ) 
values (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
end //
delimiter ;
call Paciente_Nuevo('PNTL',"RAMONA","Nkulu Obono",'2000-9-10','F',"50 KG","168 cm",0,"B/E 1","LA ASPIRINA","ecuatoguneana",
"MALABO","Bioko Norte","Malabo","");

call Paciente_Nuevo('PNTL',"Rogelia","Nkulu Obono",'1999-7-25','F',"45 KG","1678 cm",222567890,"B/E 1","nada","ecuatoguneana",
"bata","litoral","bata","HRB");

call Paciente_Nuevo('0-18M',"LUIS","NSUE",'2022-9-10','M',"5 KG","45 cm",0,"Malabo II","Nada","MALIENSE",
"hospital Regional de malabo","Bioko Norte","Malabo","");

call Paciente_Nuevo('0-18M',"romania","NSUE",'2022-9-10','M',"5 KG","45 cm",0,"Malabo II","Nada","MALIENSE",
"hospital Regional de malabo","Bioko Norte","Malabo","");

 /*******************  TABLA DE REGISTRO DEL PERSONAL SANITARIO  ******************************/  
delimiter //
create procedure Nuevo_Personal(in a char(10),b char(10),c Varchar(50),d varchar(50),e date,f Varchar(100), 
g char(1), h numeric,i numeric) 
begin
insert into Personal_Sanitario() values (a,b,c,d,e,f,g,h,i);
end //
delimiter ;
call Nuevo_Personal('PMED1','AMED1',"Benjamin","Nve Biyogo",'1989-11-10',"Los Angeles",'M',222345678,098765);
call Nuevo_Personal('PMED2','AENFR1',"Roma","MANGUE NKULU",'1990-11-10',"Los Angeles",'F',222768904,678901);
call Nuevo_Personal('PMED3','AENFR2',"LUISA","NCHAMA",'1995-12-10',"B E",'F',222768904,678901);
call Nuevo_Personal('PMED4','AENFR3',"LUCIA","Nve Biyogo",'1995-12-10',"B E",'F',222768904,678901);
call Nuevo_Personal('PMED5','AENFR4',"ESPERANZA","Nve Biyogo",'1995-12-10',"B E",'F',222768904,678901);

/*******************  TABLA DE REGISTRO DE LOS MEDICOS DEL CENTRO MEDICO ******************************/  
delimiter //
create procedure Nuevo_Medico(in a char(10),b char(10),c varchar(100), d varchar(100),e numeric, f varchar(100), g date, h varchar(100),
i char(10), j int) 
begin
insert into Medico() values (a,b,c,d,e,f,g,h,i,j);
end //
delimiter ;
call Nuevo_Medico('GBNB','PMED1',"Benjamin","Nve Biyogo",222345678,"Los Angeles",'1989-11-10',"benjaminnve@gmail.com",'M',098765);

/*******************  TABLA DE REGISTRO DE LAS CITAS MEDICAS ENTRE PACIENTES Y MEDICOS ******************************/  
delimiter //
create procedure Nueva_Cita(in a datetime,b int,c Char(10)) 
begin
insert into Cita(Fecha_Prevista,Cod_Paciente,Cod_Medico) 
values (a,b,c);
end //
delimiter ;
call Nueva_Cita('2024-01-4 08:15:10',2,'GBNB');

 /*******************  TABLA DE REGISTRO DE PACIENTES QUE LLEGAN AL HISPITAL CON O SIN CITA PREVIA******************************/  
delimiter //
create procedure Nuevo_Registro(in a char(10),b Char(10),c int,d int,e int) 
begin
insert into Registro(Area_Trabajo,Cod_Personal,Cod_paciente,Cod_Cita ,Consultorio_Asignado)
values (a,b,c,d,e);
end //
delimiter ;
call Nuevo_Registro('AENFR4','PMED1',2,1,1);
call Nuevo_Registro('AENFR4','PMED2',3,1,1);

  /*******************  TABLA DE REGISTRO DE LAS CONSULTAS MEDICAS ******************************/  
delimiter //
create procedure Nueva_Consulta(in a int,b Char(10),c Char(10),d date, e varchar(200) ) 
begin
insert into Consultas(Cod_paciente,Cod_medico,Cod_TipoConsulta,Fecha_Realizada,Diagnostico) 
values (a,b,c,d,e);
end //
delimiter ;
call Nueva_Consulta(1,'GBNB','NRM','2023-12-21',"Pacien con gestacion normal");

/*******************  TABLA DE REGISTRO DE TODAS LAS PRUEBAS MEDICAS QUE SE PUEDEN REALIZAR A LOS PACIENTES ******************************/  
delimiter //
create procedure Nueva_Prueba(in a  varchar(100)) 
begin
insert into Lista_Pruebas(Nombre_prueba) 
values (a);
end //
delimiter ;
call Nueva_Prueba("prueba de orina");

 /*******************  TABLA DE REGISTRO DE TODOS LOS ANTIGENOS DESCUBIERTOS ******************************/  
delimiter //
create procedure Antigeno_Nuevo(in a char(5),b varchar(25),c varchar(50),d varchar(25)) 
begin
insert into Antigenos() values (a,b,c,d);
end //
delimiter ;
call Antigeno_Nuevo('TPI',"tpi","tpimmmm","Niños menores de 1 año");

  /*******************  TABLA DE REGISTRO DE LOS RESULTADOS DE LAS PRUEBAS REALIZADAS A LOS PACIENTES EN EL LABORATORIO ******************************/  
delimiter //
create procedure Nuevos_resultados (in a char(10),b int,c int,d varchar(50)) 
begin
insert into Volante_Resultados(Cod_TecnicoLaboratorio,Cod_paciente,Cod_ListaPruebas,Resultado)
 values (a,b,c,d);
end //
delimiter ;
call Nuevos_resultados('PMED4',1,1, "POSITIVO");
 
  /*******************  TABLA DE REGISTRO DE TODOS LOS PACIENTES DE VACUNACION  ******************************/  
delimiter //
create procedure Nueva_Vacunacion(in a char(10),b int,c char(5),d date,e date,f date, g date, h date, i date, j date, k varchar(50),
l varchar(50), m varchar(25), n numeric) 
begin
insert into Registro_Vacunacion(Cod_auxiliar,Cod_Paciente,Vacunas_Recibidas,Fecha_1ª_Visita,Fecha_2ª_Visita,Fecha_3ª_Visita,Fecha_4ª_Visita,Fecha_5ª_Visita,
Fecha_6ª_Visita,Fecha_7ª_Visita,Nombre_Padre,Nombre_Madre,Direccion,Telefono)
 values (a,b,c,d,e,f,g,h,i,j,k,l,m,n);
end //
delimiter ;
call Nueva_Vacunacion('PMED3',1,'TPI',0000-00-00,0000-00-00,0000-00-00,0000-00-00,0000-00-00,0000-00-00,0000-00-00,"desconocido","desconocidos","malabo II",222567898);

 /******************* TABLA DE REGISTRO DE TODAS LOS MEDICAMENTOS EXISTENTES  ******************************/  
delimiter //
create procedure Nuevo_Medicamento (in a varchar(50),b varchar(15),c varchar(25),d varchar(50), e varchar(100), f date, g date) 
begin
insert into Medicamento(Nombre_medicamento,Fabricante,Numero_Lote,Composicion,Observaciones,Fecha_Fabricacion ,Fecha_Vencimiento)
 values (a,b,c,d,e,f,g);
end //
delimiter ;
call Nuevo_Medicamento ("PARACETAMOL","Nolo se",'HB567853',"mmm","NNNNN",'2022-12-03','2024-12-03');

  /*******************  TABLA DE REGISTRO DE LAS RECETAS MEDICA EXTENDIDAS A LOS PACIENTES ******************************/  
delimiter //
create procedure Nueva_Receta(in a char(10),b int,c int,d int, e varchar(50)) 
begin
insert into Receta(Cod_Medico,Cod_Paciente,Cod_Medicamento,Dias_tratamiento,Dosis_Diarias)
 values (a,b,c,d,e);
end //
delimiter ;
call Nueva_Receta('GBNB',1,1,3,"0-0-0 al dia");

  /******************* TABLA DE REGISTRO DE TOAS LAS ENFERMEDADES REGISTRADAS  ******************************/  
delimiter //
create procedure Nueva_Enfermedad (in a varchar(50),b varchar(100),c varchar(100),d varchar(100)) 
begin
insert into  Enfermedad (Nombre_Enfermedad,Descripcion,Sintomas,Tipo_Enfermedad)
 values (a,b,c,d);
end //
delimiter ;
call Nueva_Enfermedad("candidiasis","en fermedad infecciosa via vaginal","picores, exceso de flujo,etc","Vaginal");

  /*******************  TABLA DE REGISTRO DE LOS HORARIOS A SEGUIR EN EL CENTRO MEDICO ******************************/  
delimiter //
create procedure Nuevo_Horario(in a char(10),b char(10),c varchar(25),d date,e datetime) 
begin
insert into Horarios(Codigo_Horario,Personal_Asignado,Dia_Semana,Fecha_Entrada,FechaHora_Salida) 
values (a,b,c,d,e);
end //
delimiter ;
call Nuevo_Horario('S12-19-023','PMED3',"Lunes",'2023-4-23','0000-00-00 00:00:00');

  /*******************  TABLA DE REGISTRO DEL HISTORIAL MEDICO DE CADA PACIENTE ******************************/  
delimiter //
create procedure Nuevo_Historial(in a int,b char(10),c int) 
begin
insert into Historial_Medico_paciente(Cod_Paciente,Cod_Medico,Cod_VolanteResultados)
 values (a,b,c);
end //
delimiter ;
call Nuevo_Historial(2,'GBNB',1);

  /*******************  TABLA DE REGISTRO DE LA COMPRA DE MEDICAMENTOS DE LA FARMACIA ******************************/  
delimiter //
create procedure Registro_CompraMedicamentos(in a char(5),b char(7),c int,e int,f float) 
begin
insert into Farmacia(Codigo_Farmacia,Cod_Farmaceutico,Cantidad_Stock,Cantidad_Vendida,Precio_Total) 
values (a,b,c,e,f);
end //
delimiter ;
call Registro_CompraMedicamentos('HRMF','PMED2',100,5, 5000.00); 

  /*******************  TABLA DE REGISTRO DE LOS INVENTARIOS REALIZADOS EN LA FARMACIA ******************************/  
delimiter //
create procedure Inventario_Nuevo(in b char(10),c int,d varchar(50), e int,f int,g int) 
begin
insert into Inventario(Cod_Personal,Cod_medicamento,Nombre_producto,Cantidad_Inicio,Cantidad_Vendida,Cantidad_Stock)
 values (b,c,d,e,f,g);
end //
delimiter ;
call Inventario_Nuevo('PMED2',1,"paracetamol",50,1,49);

  /*******************  TABLA DE REGISTRO DE LAS PRUEBAS REALIZADAS EN EL LABORATORIO ******************************/  
delimiter //
create procedure Nuevo_RegistroPruebas(in a char(5),b char(7),c int,d int) 
begin
insert into Laboratorio(Codigo_Laboratorio,Cod_TecnicoLaboratorio,Numero_Pruebasrealizadas,Precio_Total ) 
values (a,b,c,d);
end //
delimiter ;
call Nuevo_RegistroPruebas('HRML','PMED2',1,5000);

  /*******************  TABLA DE REGISTRO DE PAGOS A LOS SERVICIOS RECIBIDOS EN EN CENTRO MÉDICO ******************************/  
delimiter //
create procedure Nuevo_Pago(in a char(5),b char(10),c varchar(100), d int) 
begin
insert into Caja(Codigo_Caja,Cod_Personal,Concepto_Pago,Pago_total)
 values (a,b,c,d);
end //
delimiter ;
call  Nuevo_Pago('HRMCJ','PMED3',"CONSULTA CON EL GINECOLOGO", 5000);

  /*******************  TABLA DE REGISTRO DE NUEVOS INGRESOS DE PACIENTES ******************************/  
delimiter //
create procedure Nuevo_Ingreso(in a int,b char(10),c VARCHAR(50), d int,e int, f date, g varchar(200),h datetime) 
begin
insert into Ingreso(Cod_Paciente,Cod_Medico,Nombre_Sala,Numero_Habitacion,
Numero_Cama,Fecha_Ingreso,Motivo_Ingreso,Fecha_Salida)
 values (a,b,c,d,e,f,g,h);
end //
delimiter ;
call Nuevo_Ingreso(2,'GBNB',"Maternidad",3,5,'2023-10-10',"mgjgmgnjgjgjfkfjf",'0000-00-00 00:00:00');

   /*******************  TABLA DE REGISTRO DE NUEVAS VISITAS A LOS PACIENTES ******************************/  
delimiter //
create procedure Nueva_Visita(in a varchar(15),b int, c varchar(100), d int,e char(10)) 
begin
insert into Visitas(Nombre_Visitante,DIP,Parentesco,Cod_Paciente,Cod_Personal)
 values (a,b,c,d,e);
end //
delimiter ;
call Nueva_Visita("Noelia Nchama",123456,"Hermana",1,'PMED3');

  /*******************  TABLA DE REGISTRO DE VACACIONES DEL PERSONAL SANITARIO ******************************/  
delimiter //
create procedure Nuevas_Vacaciones(in a char(10),b date,c date,d date, e varchar(50)) 
begin
insert into Vacaciones(Cod_Personal,Fecha_Solicitada,Fecha_Concedida,Fecha_Final,Motivo) 
values (a,b,c,d,e);
end //
delimiter ;
call Nuevas_Vacaciones('PMED3','2023-6-7','2023-6-30','2023-7-30',"Vacaciones");

  /*******************  TABLA DE REGISTRO DE PACIENTES FALLECIDOS ******************************/  
delimiter //
create procedure Fallecimiento_Nuevo(in a char(10),b char(10),c int,d date,e varchar(20)) 
begin
insert into Tanatorio(CodigoUnico_Tanatorio,Cod_Personal,Cod_Paciente,Fecha_Fallecimiento,Tipo_muerte) 
values (a,b,c,d,e);
end //
delimiter ;
call Fallecimiento_Nuevo('HRMT','PMED2',1,'2023-06-05',"mmmmm");

 /*******************  TABLA DE REGISTRO DE TODAS LAS MUJERES EMBARAZADAS ******************************/  
delimiter //
create procedure Nuevo_RegistroPrenatal(in a int,b int,c varchar(10),d varchar(50),e varchar(10),f int, g int, h int) 
begin
insert into Control_Prenatal(Cod_Paciente,Cod_volanteResultados,Estado_Civil,Nivel_Formacion,Semanas_Gestacion,
Numero_CPN,Numero_partos,Numero_abortos) 
values (a,b,c,d,e,f,g,h);
end //
delimiter ;
call Nuevo_RegistroPrenatal(1,1,"Soltera","Universitaria", 19, 2, 0,0);

  /*******************  TABLA TIPO REGISTRO DE PARTOS NUEVOS ******************************/  
delimiter //
create procedure Alumbramiento_Nuevo(in a char(10),b varchar(50),c date,d char(1), e varchar(7),f varchar(7),g varchar(100)) 
begin
insert into Registro_Partos(Cod_Personal,Nombre_Bebe,Fecha_Parto,Sexo, Peso,Altura,Observación) 
values (a,b,c,d,e,f,g);
end //
delimiter ;
call Alumbramiento_Nuevo('PMED3',"Isabel",'2023-05-07','F',"2.00","50.00","BEBE recien nacida CON PROBLEMAS DE RESPIRACION");

select * FROM Registro_Partos;
select * FROM PACIENTE;
DROP PROCEDURE Fallecimiento_Nuevo;

/*******************  TABLA TIPO REGISTRO DE PACIENTES EN REHABILITACION ******************************/  
delimiter //
create procedure Nueva_Rehabilitacion(in a int,b  date,c int, d varchar(150),e char(10),f varchar(100), g varchar(100),h time,
 i int, j varchar(200),k varchar(150), l varchar(200)) 
begin
insert into Rehabilitacion(Cod_Cita,Fecha_Realizacion,Cod_paciente,Nombre_Paciente,
Cod_Personal,Tipo_Rehabilitacion,Dias_Semana,Hora_cita,Numero_Horas_Semana,Tipo_lesion,Causa_lesion,Progreso) 
values (a,b,c,d,e,f,g,h,i,j,k,l);
end //
delimiter ;
call Nueva_Rehabilitacion(1,'2023-05-07',1,"Rogelia Mangue Nkulu",'PMED3',"Cura de una herida",
3,'08:00:00',3,"corte en la piel","un cuchillo","la herida se esta curando");


insert into Realizar_Pruebas()
Values(1,'GBNB');

insert into Especialidad_Adquirida()
Values(1,'GBNB');

insert into Enfermedad_Padecida()
Values(1,1);

insert into Inventario_Farmacia()
Values(1,'HRMF');

insert into Paciente_Caja()
Values(1,'HRMCJ');

insert into Todos_Resultados()
Values('HRML',1);

insert into Paciente_Laboratorio()
Values(1,'HRML');

insert into Venta_Medicamento()
Values('HRMF',1);

insert into Dispensacion()
Values('HRMF',1);

insert into Asignacion()
Values(2,'GBNB');

insert into Alumbramientos()
Values(2,1);

insert into Consultorio_Medico()
Values('GBNB',1);

insert into Compra_Medicamento()
Values(1,1);

insert into Enfermedad_Diagnosticada()
Values('GBNB',1);











/***********************************CONSULTAS-VISTAS******************************************/
/********************************pacientes por fecha de ingreso******************************/
create view pacientes_por_ingreso as
select Paciente.Nombre_Paciente,
Paciente.Apellidos_Paciente,Motivo_Ingreso,
Ingreso.Numero_habitacion,Ingreso.Nombre_Sala,Medico.Nombre_Medico, Fecha_Ingreso 
from Ingreso inner join Paciente inner join Medico
on Ingreso.Cod_Paciente=Paciente.Codigo_Paciente WHERE FECHA_INGRESO = '';

select *from pacientes_por_ingreso;
select *from ingreso;

/*********************************proxima cita de cada paciente***************************/
create view pacientes_por_cita as
select Paciente.Nombre_Paciente,
Paciente.Apellidos_Paciente,Medico.Nombre_Medico,Medico.Apellidos_Medico,
Cita.Fecha_Prevista from Cita inner join Paciente inner join Medico
on Cita.cod_Paciente=Paciente.Codigo_Paciente WHERE Paciente.Nombre_Paciente = "";

select *from pacientes_por_cita;
select * from cita;


/*********************************proxima cita de cada Medico***************************/
create view Medicos_por_cita as
select Paciente.Nombre_Paciente,
Paciente.Apellidos_Paciente,Medico.Nombre_Medico,Medico.Apellidos_Medico,
Cita.Fecha_Prevista from Cita inner join Paciente inner join Medico
on Cita.cod_Paciente=Paciente.Codigo_Paciente WHERE Medico.Nombre_Medico = "";

select *from Medicos_por_cita;
select * from cita;

/******************************historial medico del paciente*********************************/
create view historialmedico_paciente as
select Paciente.Nombre_Paciente,
Paciente.Apellidos_Paciente,
Paciente.Fecha_Nacimiento,
Paciente.Sexo,
Paciente.Telefono,
Paciente.Direccion,
Paciente.Alergia,
Paciente.Nacionalidad,
Historial_Medico_paciente.Numero_Historial, Cod_Medico,Cod_ListaPruebas,Nombre_prueba,Resultado,Fecha_Entregada
 from Historial_Medico_paciente inner join Paciente
inner join Volante_Resultados inner join Lista_Pruebas
on Historial_Medico_paciente.cod_Paciente=Paciente.Codigo_Paciente WHERE Nombre_Paciente = "";

select *from historialmedico_paciente ;
/*****************************medico-consulta-paciente en una fecha determinada*****************************************/
create view pacientes_atendidos as
select Consultas.Numero_Consulta, Fecha_Realizada, Medico.Nombre_Medico as Nombre_medico, Paciente.Nombre_Paciente 
as Nombre_paciente, Paciente.Apellidos_Paciente as Apellido_paciente,
 Diagnostico 
from Consultas inner join Medico inner join Paciente
on Consultas.Cod_Paciente=Paciente.Codigo_Paciente  WHERE Fecha_Realizada  = '';

select *from pacientes_atendidos;
select * from consultas;

/*************************HORARIO LABORAL*******************************************/
  create view horario_del_personal as
select Personal_Sanitario.Nombre_Personal as Nombre_personal,
Personal_Sanitario.Apellidos_Personal as Apellidos_personal,
Horarios.Dia_Semana, Horarios.Fecha_entrada,Fechahora_entrada,FechaHora_Salida
 from Horarios inner join Personal_Sanitario
on Horarios.Personal_Asignado=Personal_Sanitario.Codigo_personal WHERE Fecha_entrada  = '' ;

select *from horario_del_personal;

/*************************todos los partos en cierta fecha*******************************************/

create view partos_fecha as 
select Numero_Parto,Codigo_Paciente,paciente.Nombre_Paciente,Registro_Partos.Nombre_Bebe,
Registro_Partos.Fecha_Parto,Registro_Partos.Sexo,Registro_Partos.Peso,
Registro_Partos.Altura,Observación
 from Registro_Partos inner join paciente inner join Alumbramientos 
on Registro_Partos.Numero_parto = paciente.Codigo_Paciente where Registro_Partos.Fecha_Parto = '';

select *from partos_fecha;
describe Personal_sanitario;
select * from  Registro_Partos;

/*************************todos los fallecimientos en cierta fecha*******************************************/
create view Muertes_Fecha as
select Tanatorio.CodigoUnico_Tanatorio,Tanatorio.Cod_Personal,
paciente.Nombre_Paciente,Tanatorio.Fecha_Fallecimiento,Tanatorio.Hora_Fallecimiento,Tanatorio.Tipo_muerte
from Tanatorio inner join paciente  
on Tanatorio.Cod_Paciente = paciente.Codigo_Paciente where Fecha_Fallecimiento = '';

select * from Muertes_Fecha ;
select * from Personal_Sanitario;
select * from Tanatorio;
/*************************todos los pacientes que padecen de cierta enfermedad****************************************/
create view pacientes_enfermedad as
select Nombre_Paciente, Apellidos_Paciente,Fecha_Nacimiento,Sexo, Nombre_Enfermedad
From Paciente inner join Enfermedad inner join Enfermedad_Padecida  
on Paciente.Codigo_Paciente = Enfermedad_Padecida.Cod_Paciente where Nombre_Enfermedad = '';

select * from Pacientes_Enfermedad;
/*************************personal por area de trabajo*******************************************/


/*************************todos los vacunados en cierta fecha*******************************************/

/***************************CONSULTAS SENCILLAS************************************************/
select * from Paciente where Nombre_Paciente= ""; /*****buscar un paciente por nombre y id*/
select * from Registro where Fecha_Registro= ""; /*****buscar un paciente por nombre y id*/
select numero_Parto, Fecha_Parto  from  Registro_Partos where Nombre_Bebe= "";  /**numeros de partos por fecha*/
select sexo from Medico where Nombre_Medico= "";  /***conocer el sexo de cada medico**/
select Nombre_Personal ,sexo from Personal_Sanitario where Nombre_Personal= "";  /**conocer el nombre y edad de los empleados o personal*/

 /************ CREAR USUARIOS *************/
 
 /********** USUARIO Administrador, GOZA DE TODOS LOS PERMISOS Y PUEDE CONECTARSE LOCAL Y REMOTAMENTE *******/
 drop user if exists Administradora;
 
 CREATE USER  'Administrador'@'localhost'
 identified BY  'admin123';
 grant all on Gestion_Hospitalaria. * to 'Administrador'@'localhost';
 
  CREATE USER  'Administrador'@'%'
 identified BY  'admin123';
  grant all on Gestion_Hospitalaria. * to 'Administrador'@'localhost';
 
 /************ USUARIO DIRECTOR, SOLO PUEDE SELECCIONAR *******/
 
  CREATE USER  'Director'@'localhost'
  identified BY  'director123';
  grant select, update on Gestion_Hospitalaria. * to 'Director'@'localhost';
  
  CREATE USER  'Director'@'%'
  identified BY  'dirige123';
  grant select, update,INSERT on Gestion_Hospitalaria. * to 'Director'@'localhost';
 
 /******** USUARIO ADMISION, SOLO PUEDE SELECCIONAR, ACTUALIZAR, INSERTAR *****/
  CREATE USER  'admision'@'localhost'
  identified BY  '123@admision';
  grant select, update, insert  on Gestion_Hospitalaria.Registro 
  to 'admision'@'localhost';
  
  CREATE USER  'admision'@'localhost'
  identified BY  '123@admision';
  grant select, update, insert  on Gestion_Hospitalaria.Pacientes
  to 'admision'@'localhost';

  CREATE USER  'admision'@'localhost'
  identified BY  '123@admision';
  grant select, update, insert  on Gestion_Hospitalaria.Ingresos 
  to 'admision'@'localhost';
  
  CREATE USER  'admision'@'localhost'
  identified BY  '123@admision';
  grant select, update, insert  on Gestion_Hospitalaria.Cita 
  to 'admision'@'localhost';
  
  CREATE USER  'admision'@'localhost'
  identified BY  '123@admision';
  grant select, update, insert  on Gestion_Hospitalaria.Registro 
  to 'admision'@'localhost';
 
  CREATE USER  'vacunacion'@'localhost'
  identified BY  '123@admision';
  grant select, update, insert  on Gestion_Hospitalaria.Antigeno
  to 'vacunacion'@'localhost';
  
  CREATE USER  'vacunacion'@'localhost'
  identified BY  '123admision';
  grant select, update, insert  on Gestion_Hospitalaria.Registro 
  to 'vacunacion'@'localhost';

  
   /******** USUARIO CAJA  SOLO PUEDE SELECCIONAR E INSERTAR *****/
  drop user 'cajero'@'localhost';
  CREATE USER  'cajero'@'localhost'
  identified BY  'caja123@';
  grant select, insert, update  on Gestion_Hospitalaria.Caja to 'cajero'@'localhost';


									/*********** CREACION DE TRIGGERS *******/
/********************************* TRIGGERS DE ELIMINACION ******************************/

-- TRIGGER DE ELIMINACION DE LA TABLA PACIENTE
-- el trigger de eliminacion es un disparador que va a saltar cada vez que se realice una accion de eliminacion en la tabla paciente
-- En esta tabla se van a almacenar todos los datos de un paciente que han sido eliminados de la bse de datos
-- solo se pueden eliminar alos pacientes recien registrados, un paciente que ya ha realizado alguna operacion en el hospital, como una compra de medicamentos, analisis en el laboratorio o una vacunacion ya no podra ser eliminado

 create table Datos_Eliminados_Paciente(
Antiguo_Codigo_paciente int  primary key not null,    
Antiguo_Cod_TipoPaciente char(5) not null,          
Antiguo_Nombre_Paciente varchar(50) not null,
Antiguo_Apellidos_Paciente varchar (50) not null,
Antigua_Fecha_Nacimiento date not null,
Antiguo_Sexo char(1) not null,
Antiguo_Peso varchar(7),
Antigua_Altura varchar(7),
Antiguo_Telefono numeric not null,
Antigua_Direccion varchar(100)not null,
Antigua_Alergia varchar(100) not null,
Antigua_Nacionalidad varchar(25),
Antiguo_Lugar_Nacimiento varchar(100),
Antigua_Provincia varchar (15),
Antiguo_Distrito varchar(25),
Antiguo_Hospital_Procedencia varchar(50));
 delimiter //
 create trigger Borrar_Paciente after delete on Paciente for each row
 begin
 insert into Datos_Eliminados_Paciente() 
 values(old.Codigo_paciente, old.Cod_TipoPaciente, old.Nombre_Paciente, old.Apellidos_Paciente,
 old.Fecha_Nacimiento, old.Sexo, old.Peso,old.Altura,old.Telefono,old.Direccion,old.Alergia,old.Nacionalidad,old.Lugar_Nacimiento,
 old.Provincia,old.Distrito,old.Hospital_Procedencia);
 end //
 delimiter ;
 
 
 drop trigger Borrar_Paciente;
 /********************************* TRIGGERS DE ACTUALIZACION ******************************/
 -- se pueden actualizar los datos del paciente en cualquier situacion
 -- La actualizacion hasta ahora solo se puede realizar una vez, no permite actualizar los datos del paciente mas de una vez
 
-- TRIGGER DE ACTUALIZACION DE LA TABLA PACIENTE
  CREATE TABLE Datos_Actualizacion_Paciente (
Antiguo_Codigo_paciente int  primary key not null,    
Antiguo_Cod_TipoPaciente char(5) not null,          
Antiguo_Nombre_Paciente varchar(50) not null,
Antiguo_Apellidos_Paciente varchar (50) not null,
Antigua_Fecha_Nacimiento date not null,
Antiguo_Sexo char(1) not null,
Antiguo_Peso varchar(7),
Antigua_Altura varchar(7),
Antiguo_Telefono numeric not null,
Antigua_Direccion varchar(100)not null,
Antigua_Alergia varchar(100) not null,
Antigua_Nacionalidad varchar(25),
Antiguo_Lugar_Nacimiento varchar(100),
Antigua_Provincia varchar (15),
Antiguo_Distrito varchar(25),

Antiguo_Hospital_Procedencia varchar(50)
 );
 
 delimiter //
 create trigger Actualizar_Pacientes after update on Paciente for each row
 begin
 insert into Datos_Actualizacion_Paciente() 
 values(old.Codigo_paciente, old.Cod_TipoPaciente, old.Nombre_Paciente, old.Apellidos_Paciente,
 old.Fecha_Nacimiento, old.Sexo, old.Peso,old.Altura,old.Telefono,old.Direccion,old.Alergia,old.Nacionalidad,old.Lugar_Nacimiento,
 old.Provincia,old.Distrito,old.Hospital_Procedencia);
 end //
 delimiter ;
 
 -- TRIGGER DE ACTUALIZACION DE INVENTARIO
 -- este trigger permine el almacenamiento de los antiguos datos de un inventario actualizado, despues de cambiar una informacio, esta se va a almacenar en esta tabla 
 create table Datos_Actualizacion_Inventario(
Antiguo_Codigo_Inventario int  primary  key not null,
Antigua_Fecha_Inventario datetime null default current_timestamp,
Antiguo_Cod_Personal char(10) not null,
Antiguo_Cod_Medicamento int, 
Antiguo_Nombre_producto varchar(50) not null,
Antigua_Cantidad_Inicio int,
Antigua_Cantidad_Vendida int,
Antigua_Cantidad_Stock int);

select * from Inventario;

delimiter //
 create trigger Actualizar_Inventario after update on Inventario for each row
 begin
 insert into Datos_Actualizacion_Paciente() 
 values(old.Codigo_Inventario, old.Fecha_Inventario, old.Cod_Personal, old.Cod_Medicamento,
 old.Nombre_producto, old.Cantidad_Inicio,old.Cantidad_Vendida,old.Cantidad_Stock);
 end //
 delimiter ;
 
 -- TRIGGER DE ACTUALIZACION DE FARMACIA
 -- Esta trigger permite almacenar antiguos datos de operacion de la farmacia
 create table Datos_Actualizacion_Farmacia(
Antigio_Codigo_Farmacia char(5) primary  key not null,
Antigio_Cod_Farmaceutico char(7) not null,
Antigio_Fecha_Venta datetime null default current_timestamp,
Antigio_Cantidad_Stock int,
Antigio_Cantidad_Vendida int,
Antigio_Precio_Total float); 
 
  delimiter //
 create trigger Actualizar_Farmacia after update on Farmacia for each row
 begin
 insert into Datos_Actualizacion_Paciente() 
 values(old.Codigo_Farmacia, old.Cod_Farmaceutico, old.Fecha_Venta, old.Cantidad_Stock,
 old.Cantidad_Vendida, old.Precio_Total);
 end //
 delimiter ;
 
 
 select * FROM PACIENTE;
 delete from paciente where Codigo_Paciente = 1;
 select*from Datos_Eliminados_Paciente;
  select*from Datos_Actualizacion_Paciente;
 
 update paciente set Peso = "20 kg" where Codigo_Paciente = 2; 

