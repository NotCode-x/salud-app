/**
 * importamos useState y useEffect de react
 */

import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Alert,
} from "react-native";

//Importamos iconos que nos proporciona el framework expo con el modulo @expo/vector-icons
import {
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";

//importamos todas las funciones que se van a utilizar para traer distintos datos
import {
  GetAllPatients,
  GetCitasRehabilitacion,
  GetAllConsultas,
} from "../../functions/GetFunctions";

//importamos los estilos de esta pantalla
import {
  stylesScreenConsultas,
  stylesScreenPacientes,
} from "../../styles/styles";

//importamos axios para probar la conexión con la base de datos para testear
import axios from "axios";

export default function PantallaConsultas({ route, navigation }) {
  //creamos una variable que actualizará su estado para saber si nos hemos conectado a la db
  //con la función setConnection recuperamos o guardamos el resultado de la petición con axios en cargarFnc
  const [connection, setConnection] = useState("");

  //variable para almacenar todos los pacientes que responde el backend
  const [consultas, setConsultas] = useState("");

  /**
   * useEffect es un método de react que se ejecuta siempre que se carga  o refreca una vista
   * Es decir, todo lo que se ejecute dentro de esa función, es lo primero que se carga.
   */
  useEffect(() => {
    //Esta función verifica la conexión a la base de datos gestion_hospitalaria
    const cargarFnc = async () => {
      let res = await GetAllConsultas();

      setConsultas(res);
    };

    //ejecutamos la función cargarFnc() en useEffect para que sea lo primero en ejecutarse al cargarse la vista
    cargarFnc();
  }, []);

  //useLayaoutEffect se utiliza para recargar la pagina al entrar en el
  React.useLayoutEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      let res = await GetAllConsultas();

      setConsultas(res);
    });

    return unsubscribe;
  }, []);

  return (
    <View style={stylesScreenPacientes.container}>
      <StatusBar style="auto" />

      <View style={stylesScreenConsultas.containerSearch}>
        <TextInput
          style={stylesScreenConsultas.inputSearchDos}
          placeholder="Buscar paciente..."
        />
      </View>

      {consultas == "" ? (
        <Text>No hay pacientes registrados</Text>
      ) : (
        <FlatList
          data={consultas}
          style={stylesScreenPacientes.flatListStyle}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
          paddingBottom: 50
          }}
          renderItem={({ item, index }) => {
            return item.estadoConsulta == "En espera" ||
              item.estadoConsulta == "Resultados y análisis" ? (
              <TouchableOpacity
                style={stylesScreenConsultas.ListItemView}
                onPress={() => {
                  //navigation.navigate('PantallaRevisarCita', item)
                  if (item.estadoConsulta == "En espera") {
                    Alert.alert("Confirmar", "¿Desea ir a la consulta?", [
                      {
                        text: "Ir a la consulta",
                        onPress: () => {
                          navigation.navigate("FormConsultorio", item);
                        },
                      },
                      {
                        text: "Cancelar",
                        onPress: () => {
                          console.log("nada");
                        },
                      },
                    ]);
                  } else if (item.estadoConsulta == "Resultados y análisis") {
                    Alert.alert("Confirmar", "¿Diagnóstico final?", [
                      {
                        text: "Diagnóstico final",
                        onPress: () => {
                          navigation.navigate("FormEnfermedad", item);
                        },
                      },
                      {
                        text: "Cancelar",
                        onPress: () => {
                          console.log("nada");
                        },
                      },
                    ]);
                  }
                }}
              >
                <View style={stylesScreenPacientes.nameItem}>
                  <Text style={stylesScreenPacientes.textItem}>
                    {item.codigoPaciente}
                  </Text>
                  <Text style={stylesScreenPacientes.textItem}>
                    {item.nombrePaciente}
                  </Text>
                  <Text style={stylesScreenPacientes.textApellido}>
                    {item.apellidosPaciente}
                  </Text>
                </View>
                {item.estadoConsulta == "En espera" ? (
                  <Text style={stylesScreenConsultas.textDescriptionGrave}>
                    {item.estadoConsulta}
                  </Text>
                ) : (
                  <Text style={stylesScreenConsultas.textDescriptionNormal}>
                    {item.estadoConsulta}
                  </Text>
                )}
              </TouchableOpacity>
            ) : (
              ""
            );
          }}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
}
