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
  Modal
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

//importamos la funcion para mostrar todos los pacientes
import { GetAllPatients, GetCitasVacunacion } from "../../functions/GetFunctions";

//importamos los estilos de esta pantalla
import { stylesScreenPacientes } from "../../styles/styles";

//importamos axios para probar la conexión con la base de datos para testear
import axios from "axios";

export default function PantallaVacunacion({ route, navigation }) {
  //creamos una variable que actualizará su estado para saber si nos hemos conectado a la db
  //con la función setConnection recuperamos o guardamos el resultado de la petición con axios en cargarFnc
  const [connection, setConnection] = useState("");

  //variable para almacenar todos los pacientes que responde el backend
  const [pacientes, setPacientes] = useState("");

  /**
   * useEffect es un método de react que se ejecuta siempre que se carga  o refreca una vista
   * Es decir, todo lo que se ejecute dentro de esa función, es lo primero que se carga.
   */
  useEffect(() => {
    //Esta función verifica la conexión a la base de datos gestion_hospitalaria
    const cargarFnc = async () => {
      let res = await GetCitasVacunacion();
      setPacientes(res);
    };

    //ejecutamos la función cargarFnc() en useEffect para que sea lo primero en ejecutarse al cargarse la vista
    cargarFnc();
  }, []);


  //useLayaoutEffect se utiliza para recargar la pagina al entrar en el
  React.useLayoutEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      let res = await GetCitasVacunacion();
      setPacientes(res);
    });

    return unsubscribe;
  }, []);

  return (
    <View style={stylesScreenPacientes.container}>
      <StatusBar style="auto" />

      <View style={stylesScreenPacientes.containerSearch}>
        <TextInput
          style={stylesScreenPacientes.inputSearchDos}
          placeholder="Buscar paciente..."
        />
      </View>

      {pacientes == "" ? (
        <Text>No hay pacientes registrados</Text>
      ) : (
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
              <TouchableOpacity style={stylesScreenPacientes.ListItemView} onPress={() => navigation.navigate('FormVacunacion', item)}>
                
                <View style={stylesScreenPacientes.nameItem}>
                  <Text style={stylesScreenPacientes.textItem}>{item.nombrePaciente}</Text>
                  <Text style={stylesScreenPacientes.textItem}>{item.apellidosPaciente}</Text>
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
