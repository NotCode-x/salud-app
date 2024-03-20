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
//importamos las funciones genericas
import { searchName } from "../../functions/generic";
//importamos la funcion para mostrar todos los pacientes
import { GetAllPatients } from "../../functions/GetFunctions";

//importamos los estilos de esta pantalla
import { stylesScreenPacientes, stylesComunes } from "../../styles/styles";

//importamos axios para probar la conexión con la base de datos para testear
import axios from "axios";
import { colors } from "../../styles/colors";

export default function PantallaHistorial({ route, navigation }) {
  //variable para almacenar todos los pacientes que responde el backend
  const [pacientes, setPacientes] = useState("");
  const [historialPaciente, setHistorial] = useState('')

  const [modal, setModal] = useState(false);

  //variable para almacenar el valor que se busca
  const [buscar, setBuscar] = useState("");

  //variable que almacena el resultado de la búsqueda
  const [resultadosBusqueda, setResultados] = useState("");

  /**
   * useEffect es un método de react que se ejecuta siempre que se carga  o refreca una vista
   * Es decir, todo lo que se ejecute dentro de esa función, es lo primero que se carga.
   */
  useEffect(() => {
    //Esta función verifica la conexión a la base de datos gestion_hospitalaria
    const cargarFnc = async () => {
      let res = await GetAllPatients();
      setPacientes(res);
    };

    //ejecutamos la función cargarFnc() en useEffect para que sea lo primero en ejecutarse al cargarse la vista
    cargarFnc();
  });

  //useLayaoutEffect se utiliza para recargar la pagina al entrar en el
  React.useLayoutEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      let res = await GetAllPatients();
      setPacientes(res);
    });

    return unsubscribe;
  }, []);

  return (
    <View style={stylesScreenPacientes.container}>
      <StatusBar style="auto" />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: colors.AppColor,
              fontWeight: "bold",
              borderBottomWidth: 1,
              borderColor: colors.AppColor,
              marginBottom: 100,
              paddingBottom: 10,
              borderBottomWidth: 6
            }}
          >
            Seleccionar historial
          </Text>
          <TouchableOpacity
            style={{
              width: "35%",
              height: "auto",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.AppColor,
              padding: 12,
              borderRadius: 10,
              marginBottom: 5,
            }}

            onPress={ () => navigation.navigate('FormVerHistorialConsultas', historialPaciente)}
          >
            <Text style={{ fontSize: 15, color: "#fff", fontWeight: "bold" }}>
              Consulta
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "35%",
              height: "auto",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.AppColor,
              padding: 12,
              borderRadius: 10,
              marginBottom: 5,
            }}

            onPress={ () => navigation.navigate('FormVerHistorialRehabilitacion', historialPaciente)}
          >
            <Text style={{ fontSize: 15, color: "#fff", fontWeight: "bold" }}>
              Rehabilitación
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "35%",
              height: "auto",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.AppColor,
              padding: 12,
              borderRadius: 10,
              marginBottom: 5,
            }}

            onPress={ () => navigation.navigate('FormVerHistorialVacunacion', historialPaciente)}
          >
            <Text style={{ fontSize: 15, color: "#fff", fontWeight: "bold" }}>
              Vacunación
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "35%",
              height: "auto",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.AppColor,
              padding: 12,
              borderRadius: 10,
              marginBottom: 5,
            }}

            onPress={ () => navigation.navigate('FormVerHistorialLaboratorio', historialPaciente)}
          >
            <Text style={{ fontSize: 15, color: "#fff", fontWeight: "bold" }}>
              Laboratorio
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={stylesScreenPacientes.containerSearch}>
        <TextInput
          style={stylesScreenPacientes.inputSearchDos}
          placeholder="Buscar historial del paciente..."
          onChangeText={(text) => {
            //variable para almacenar el resultado de la busqueda
            let res = searchName(pacientes, text);

            console.log("Resultados: ", res);

            setResultados(res);
          }}
        />
      </View>

      {resultadosBusqueda == "" ? (
        <FlatList
          data={pacientes}
          style={stylesScreenPacientes.flatListStyle}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
          paddingBottom: 50
          }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={stylesScreenPacientes.ListItemViewDos}
                onPress={() => {
                  setModal(!modal);
                  setHistorial(item)
                }}
              >
                <View style={stylesScreenPacientes.nameItem}>
                  <Text style={stylesScreenPacientes.textItem}>
                    {item.nombrePaciente}
                  </Text>
                  <Text style={stylesScreenPacientes.textApellido}>
                    {item.apellidosPaciente}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <FlatList
          data={resultadosBusqueda}
          style={stylesScreenPacientes.flatListStyle}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
          paddingBottom: 50
          }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={stylesScreenPacientes.ListItemViewDos}
                onPress={() => {
                  setModal(!modal);
                  setHistorial(item)
                }}
              >
                <View style={stylesScreenPacientes.nameItem}>
                  <Text style={stylesScreenPacientes.textItem}>
                    {item.nombrePaciente}
                  </Text>
                  <Text style={stylesScreenPacientes.textApellido}>
                    {item.apellidosPaciente}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
}
