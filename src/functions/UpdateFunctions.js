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
 * Aquí están todas las funciones que hacen las diferentes peticiones POST al backend para actualizar un campo
 */

export const actualizarConsultaPaciente = async (obj) => {
  //recuperamos el parametro donde se guarda la ip del servidor local
  let localIpServer = await SecureStore.getItemAsync("ipLocal");
  console.log("Datos a actualizar: ", obj);

  let req = await axios.post(
    `http://${localIpServer}/salud-backend/update_functions/update_consulta.php`,
    {
      diagnostico: obj.diagnosticoConsulta,
      pruebasLaboratorio: obj.pruebasLaboratorio,
      idConsulta: parseInt(obj.idConsulta)
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

