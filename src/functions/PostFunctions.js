import axios from "axios";

import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from "react-native";
import * as SecureStore from "expo-secure-store";

/**
 * Para generar códigos de paciente aleatorios utilizaremos el módulo uuidv4
 * uuid (Identificador único universal), Un identificador único universal o universally unique identifier (UUID) es un número de 128 bits.
 * Con este módulo podemos generar códigos de forma aleatoria sin  dificultad.
 */

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

/**
 *
 * Aquí están todas las funciones que hacen las diferentes peticiones POST al backend
 */

export const registrarPaciente = async (obj) => {
  //recuperamos el parametro donde se guarda la ip del servidor local
  let localIpServer = await SecureStore.getItemAsync("ipLocal");
  console.log("Datos a enviar: ", obj);

  let req = await axios.post(
    `http://${localIpServer}/salud-backend/register_functions/registrar_paciente.php`,
    {
      codigo: obj.codigoTipoPaciente,
      nombre: obj.nombre,
      apellidos: obj.apellidos,
      fechaNacimiento: obj.fechaNacimiento,
      sexo: obj.sexo,
      peso: obj.peso,
      altura: obj.altura,
      telefono: obj.telefono,
      direccion: obj.direccion,
      alergia: obj.alergia,
      nacionalidad: obj.nacionalidad,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  console.log("XD: ", req.data);

  //validamos la respuesta del servidor
  if (req.data == 1) {
    return 1;
  } else {
    return 0;
  }
};

export const registrarCita = async (obj) => {
  //recuperamos el parametro donde se guarda la ip del servidor local
  let localIpServer = await SecureStore.getItemAsync("ipLocal");
  console.log("Datos a enviar: ", obj);

  let req = await axios.post(
    `http://${localIpServer}/salud-backend/register_functions/registrar_cita.php`,
    {
      codigoPaciente: obj.codigoPaciente,
      codigoMedico: obj.codigoMedico,
      fecha: obj.fecha,
      hora: obj.hora,
      tipoCita: obj.tipoCita,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  console.log("XD: ", req.data);

  //validamos la respuesta del servidor
  if (req.data == 1) {
    return 1;
  } else {
    return 0;
  }
};

export const registrarConsulta = async (obj) => {
  //recuperamos el parametro donde se guarda la ip del servidor local
  let localIpServer = await SecureStore.getItemAsync("ipLocal");
  
  console.log("Datos a enviar: ", obj);

  let req = await axios.post(
    `http://${localIpServer}/salud-backend/register_functions/registrar_consulta.php`,
    {
      codigoPaciente: obj.codigoPaciente,
      codigoMedico: obj.codigoMedico
      
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  console.log("XD: ", req.data);

  //validamos la respuesta del servidor
  if (req.data == 1) {
    return 1;
  } else {
    return 0;
  }
};

export const registrarRehabilitacion = async (obj, cod) => {
  //recuperamos el parametro donde se guarda la ip del servidor local
  let localIpServer = await SecureStore.getItemAsync("ipLocal");
  console.log("Datos a enviar: ", obj);

  let req = await axios.post(
    `http://${localIpServer}/salud-backend/register_functions/registrar_rehabilitacion.php`,
    {
      codigoCita: obj.codigoCita,
      codigoPaciente: obj.codigoPaciente,
      codigoMedico: obj.codigoMedico,
      codigoPersonal: cod,
      fechaRealizacion: obj.fechaRealizacion,
      tipoRehabilitacion: obj.tipoRehabilitacion,
      nombrePaciente: obj.nombrePaciente,
      diasSemana: obj.diasSemana,
      horaCita: obj.horaCita,
      numeroHorasSemana: obj.numeroHorasSemana,
      tipoLesion: obj.tipoLesion,
      causaLesion: obj.causaLesion,
      progreso: obj.progreso,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  console.log("XD: ", req.data);

  //validamos la respuesta del servidor
  if (req.data == 1) {
    return 1;
  } else {
    return 0;
  }
};

export const registrarEnfermedad = async (obj) => {
  //recuperamos el parametro donde se guarda la ip del servidor local
  let localIpServer = await SecureStore.getItemAsync("ipLocal");
  console.log("Datos a enviar: ", obj);

  let req = await axios.post(
    `http://${localIpServer}/salud-backend/register_functions/registrar_enfermedad.php`,
    {
      nombre: obj.nombre,
      tipo: obj.tipo,
      sintomas: obj.sintomas,
      descripcion: obj.descripcion,
      id: obj.id,
      receta: obj.receta,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
};

export const registrarCompraMedicamento = async (obj, obj1) => {
  //recuperamos el parametro donde se guarda la ip del servidor local
  let localIpServer = await SecureStore.getItemAsync("ipLocal");

  let codigoFarmacia = uuidv4().substring(0, 5)
  //console.log("Datos C: ", obj, obj1);

  let req = await axios.post(
    `http://${localIpServer}/salud-backend/register_functions/registrar_compra_medicamentos.php`,
    {
      nombreMedicina: obj.datosMedicina.n,
      cantidad: parseInt(obj.cantidad),
      nombrePersonal: obj1.data.n,
      codigoPersonal: obj1.data.c,
      stock: parseInt(obj.datosMedicina.stock),
      idMedicamento: obj.datosMedicina.id,
      precioUnitario: obj.datosMedicina.p,
      codigoFarmacia: codigoFarmacia.toUpperCase()
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  //

  console.log("XD: ", req.data);

  //validamos la respuesta del servidor
  if (req.data == 1) {
    return 1;
  } else {
    return 0;
  }
};

export const registrarVacunacion = async (obj) => {
  //recuperamos el parametro donde se guarda la ip del servidor local
  let localIpServer = await SecureStore.getItemAsync("ipLocal");
  console.log("Datos a registrar: ", obj);

  let req = await axios.post(
    `http://${localIpServer}/salud-backend/register_functions/registrar_vacunacion.php`,
    {
      codigoAuxiliar: obj.data.c,
      codigoPaciente: obj.codigoPaciente,
      fechaVisita: obj.fechaVisita,
      vacunas: obj.vacunas,
      nombrePadre: obj.nombrePadre,
      nombreMadre: obj.nombreMadre,
      direccion: obj.direccion,
      telefono: obj.telefono,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  console.log("query: ", req.data)


  //validamos la respuesta del servidor
  if (req.data == 1) {
    return 1;
  } else {
    return 0;
  }
};
