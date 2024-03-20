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
import { stylesScreenConsultas } from "../../styles/styles";

//importamos axios para probar la conexión con la base de datos para testear
import axios from "axios";

export default function PantallaLaboratorio({ route, navigation }) {
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
    <View style={stylesScreenConsultas.container}>
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
          style={stylesScreenConsultas.flatListStyle}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
          paddingBottom: 50
          }}
          renderItem={({ item, index }) => {
            return (
                item.estadoConsulta == 'Pruebas y análisis' ? (
                    <TouchableOpacity
                style={stylesScreenConsultas.ListItemView}
                onPress={() => {
                  //navigation.navigate('PantallaRevisarCita', item)
                  Alert.alert("Confirmar", "¿Desea ir a la sala de pruebas?", [
                    {
                      text: "Sala de pruebas",
                      onPress: () => {
                        navigation.navigate("FormLaboratorio", item);
                      },
                    },
                    {
                      text: "Cancelar",
                      onPress: () => {
                        console.log("nada");
                      },
                    },
                  ]);
                }}
              >
                <View style={stylesScreenConsultas.nameItem}>
                  <Text style={stylesScreenConsultas.textItem}>
                    {item.codigoPaciente}
                  </Text>
                  <Text style={stylesScreenConsultas.textItem}>
                    {item.nombrePaciente}
                  </Text>
                  <Text style={stylesScreenConsultas.textItem}>
                    {item.apellidosPaciente}
                  </Text>
                </View>
                {
                  item.estadoPaciente == 'Grave' ? (
                    <Text style={stylesScreenConsultas.textDescriptionGrave}>
                    {item.estadoConsulta}
                  </Text>
                  ) : (
                    <Text style={stylesScreenConsultas.textDescriptionNormal}>
                    {item.estadoConsulta}
                  </Text>
                  )
                }
              </TouchableOpacity>
                ) : ''
              
            );
          }}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
}
