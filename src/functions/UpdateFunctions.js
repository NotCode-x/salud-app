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

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

/**
 *
 * Aquí están todas las funciones que hacen las diferentes peticiones POST al backend para actualizar un campo
 */

export const actualizarConsultaPaciente = async (obj) => {
  //recuperamos el parametro donde se guarda la ip del servidor local
  let localIpServer = await SecureStore.getItemAsync("ipLocal");

  //esto genera un codigo aleatorio
  let codigoLaboratorio = uuidv4().substring(0, 5)
  
  console.log("Datos a actualizar: ", obj);

  let req = await axios.post(
    `http://${localIpServer}/salud-backend/update_functions/update_consulta.php`,
    {
      diagnostico: obj.diagnosticoConsulta,
      pruebasLaboratorio: obj.pruebasLaboratorio,
      idConsulta: parseInt(obj.idConsulta),
      codigoLaboratorio: codigoLaboratorio.toUpperCase()
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

export const actualizarResultadosConsulta = async (obj) => {
  //recuperamos el parametro donde se guarda la ip del servidor local
  let localIpServer = await SecureStore.getItemAsync("ipLocal");
  console.log("Datos a actualizar: ", obj);

  let req = await axios.post(
    `http://${localIpServer}/salud-backend/update_functions/update_resultados.php`,
    {
      resultadosLaboratorio: obj.resultadosLaboratorio,
      idConsulta: parseInt(obj.idConsulta),
      precio: obj.precio
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

export const actualizarPaciente = async (obj) => {
  //recuperamos el parametro donde se guarda la ip del servidor local
  let localIpServer = await SecureStore.getItemAsync("ipLocal");
  console.log("Datos a actualizar: ", obj);

  let req = await axios.post(
    `http://${localIpServer}/salud-backend/update_functions/update_paciente.php`,
    {
      idPaciente: obj.idPaciente,
      codigoTipoPaciente: obj.codigoTipoPaciente,
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

