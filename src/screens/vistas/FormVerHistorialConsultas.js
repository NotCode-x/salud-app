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
  ScrollView,
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
//importamos las funciones genericas
import { searchName } from "../../functions/generic";
//importamos la funcion para mostrar todos los pacientes
import {
  GetHistorialConsultas,
  GetHistorialLaboratorio,
  GetHistorialVacunacion,
  GetHistorialCita,
  GetHistorialRehabilitacion,
} from "../../functions/GetFunctions";

//importamos los estilos de esta pantalla
import {
  stylesScreenPacientes,
  stylesComunes,
  stylesFormRegistrarPaciente,
} from "../../styles/styles";

//importamos axios para probar la conexión con la base de datos para testear
import axios from "axios";
import { colors } from "../../styles/colors";

export default function FormVerHistorialConsultas({ route, navigation }) {
  const {
    idPaciente,
    nombrePaciente,
    apellidosPaciente,
    fechaNacimientoPaciente,
    sexoPaciente,
    pesoPaciente,
    alturaPaciente,
    telefonoPaciente,
    direccionPaciente,
    alergiaPaciente,
    nacionalidadPaciente,
    tipoPaciente,
  } = route.params;
  //variable para almacenar todos los pacientes que responde el backend
  const [consultas, setConsultas] = useState("");

  useEffect(() => {
    //Esta función verifica la conexión a la base de datos gestion_hospitalaria
    const cargarFnc = async () => {
      let resConsultas = await GetHistorialConsultas(idPaciente);
      setConsultas(resConsultas);
    };

    //ejecutamos la función cargarFnc() en useEffect para que sea lo primero en ejecutarse al cargarse la vista
    cargarFnc();
  }, []);

  //useLayaoutEffect se utiliza para recargar la pagina al entrar en el
  React.useLayoutEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      let resConsultas = await GetHistorialConsultas(idPaciente);
      setConsultas(resConsultas);
    });

    return unsubscribe;
  }, []);

  return (
    <View style={stylesScreenPacientes.container}>
      <StatusBar style="auto" />
      <View
        style={{
          width: "100%",
          borderBottomWidth: 1,
          padding: 15,
          borderBottomWidth: 3,
          borderBottomColor: colors.AppColor,
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            color: colors.AppColor,
          }}
        >
          {nombrePaciente + " " + apellidosPaciente}
        </Text>
      </View>
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
          return (
            <View style={{ width: "95%", marginBottom: 10, backgroundColor: '#fff', padding: 10, borderRadius: 10, elevation: 8,
            shadowColor: "#000",
            shadowOpacity: 0.2,
            backgroundColor: "#fff", }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Fecha:{" "}
                </Text>
                <Text style={{ fontSize: 13 }}>{item.fechaConsulta}</Text>
              </View>
              <View style={{ width: "95%" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Diagnostico
                </Text>
                <Text style={{ marginBottom: 10 }}>
                  {item.diagnosticoConsulta}
                </Text>
              </View>
              <View style={{ width: "95%" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Pruebas
                </Text>
                <Text style={{ marginBottom: 10 }}>
                  {item.pruebasLaboratorio}
                </Text>
              </View>
              <View style={{ width: "95%" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Resultados
                </Text>
                <Text style={{ marginBottom: 10 }}>
                  {item.resultadosLaboratorio}
                </Text>
              </View>
            </View>
          );
        }}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
