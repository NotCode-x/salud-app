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

export default function PantallaPacientes({ route, navigation }) {
  //variable para almacenar todos los pacientes que responde el backend
  const [pacientes, setPacientes] = useState("");

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

  return (
    <View style={stylesScreenPacientes.container}>
      <StatusBar style="auto" />

      <View style={stylesScreenPacientes.containerSearch}>
        <TextInput
          style={stylesScreenPacientes.inputSearch}
          placeholder="Buscar paciente..."
          onChangeText={(text) => {
            //variable para almacenar el resultado de la busqueda
            let res = searchName(pacientes, text);

            console.log("Resultados: ", res);

            setResultados(res);
          }}
        />
        <TouchableOpacity
          style={stylesScreenPacientes.buttonAdd}
          onPress={() => {
            //En esta linea lo que hacemos es navegar a otra pantalla (la pantalla del formulario de registro) utilizando el objeto navigation y su método navigate
            navigation.navigate("FormRegistrarPaciente");
          }}
        >
          <Ionicons name="person-add" size={30} />
        </TouchableOpacity>
      </View>

      {resultadosBusqueda == "" ? (
        <FlatList
          data={pacientes}
          style={stylesScreenPacientes.flatListStyle}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
          renderItem={({ item, index }) => {
            return (
              <View style={stylesScreenPacientes.ListItemView}>
                <View style={stylesScreenPacientes.nameItem}>
                  <Text style={stylesScreenPacientes.textItem}>
                    {item.nombrePaciente}
                  </Text>
                  <Text style={stylesScreenPacientes.textApellido}>
                    {item.apellidosPaciente}
                  </Text>
                </View>
                <View style={stylesComunes.containerDosBotones}>
                  <TouchableOpacity style={stylesComunes.botonEditar}>
                    <Text style={stylesComunes.textoBotons}>Editar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                  style={stylesComunes.botonAccess}
                    onPress={() =>
                      navigation.navigate("PantallaRevisarCita", item)
                    }
                  >
                    <Text style={stylesComunes.textoBotons}>Concertar cita</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <FlatList
          data={resultadosBusqueda}
          style={stylesScreenPacientes.flatListStyle}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={stylesScreenPacientes.ListItemView}
                onPress={() => navigation.navigate("PantallaRevisarCita", item)}
              >
                <Text style={stylesScreenPacientes.idItem}>
                  {item.idPaciente}.
                </Text>
                <View style={stylesScreenPacientes.nameItem}>
                  <Text style={stylesScreenPacientes.textItem}>
                    {item.nombrePaciente}
                  </Text>
                  <Text style={stylesScreenPacientes.textItem}>
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
