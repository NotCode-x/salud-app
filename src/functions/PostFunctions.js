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
 *
 * Aquí están todas las funciones que hacen las diferentes peticiones POST al backend
 */

export const registrarPaciente = async (obj) => {
  //recuperamos el parametro donde se guarda la ip del servidor local
  let localIpServer = await SecureStore.getItemAsync("ipLocal");
  console.log("Datos a enviar: ", obj);

  let req = await axios.post(
    `http://${localIpServer}/salud-backend/registrar_paciente.php`,
    {
      codigo: obj.codigo,
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
    `http://${localIpServer}/salud-backend/registrar_cita.php`,
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

export const registrarRehabilitacion = async (obj, cod) => {
  //recuperamos el parametro donde se guarda la ip del servidor local
  let localIpServer = await SecureStore.getItemAsync("ipLocal");
  console.log("Datos a enviar: ", obj);

  let req = await axios.post(
    `http://${localIpServer}/salud-backend/registrar_rehabilitacion.php`,
    {
      codigoCita: obj.codigoCita,
      codigoPaciente:obj.codigoPaciente,
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
