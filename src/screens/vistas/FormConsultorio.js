import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  SafeAreaView
} from "react-native";

//importamos las funciones genericas
import { checkFormFields, checkIfPassword } from "../../functions/generic";

//importamos las funciones post para actualizar campos
import { actualizarConsultaPaciente } from "../../functions/UpdateFunctions";

import { GetPersonalSanitario } from "../../functions/GetFunctions";

//importamos los estilos para esta pantalla
import { stylesFormConsultorio, stylesFormRegistrarPaciente } from "../../styles/styles";

/**
 * Para generar códigos de paciente aleatorios utilizaremos el módulo uuidv4
 * uuid (Identificador único universal), Un identificador único universal o universally unique identifier (UUID) es un número de 128 bits.
 * Con este módulo podemos generar códigos de forma aleatoria sin  dificultad.
 */

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

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

import { colors } from "../../styles/colors";

//creamos el componente del formulario de registro del paciente al cual llamamos FormRegistrarPaciente
//Esta es la pantalla del formulario para paciente nuevos

export default function FormConsultorio({ route, navigation }) {
  //recibimos los parametros que se han traspado de la pantalla de consultas a la pantalla del formulario
  const { numeroConsulta, diagnosticoConsulta, pruebasLaboratorio } =
    route.params;

  //variable donde se almacena un identificador universal
  let codPaciente = "P" + uuidv4().substring(0, 4);

  //capturamos los datos de todo el personal sanitario
  const [personalSanitario, setPersonalSanitario] = useState("");

  const [password, setPassword] = useState("");

  const [datosConsulta, setDatosConsulta] = useState({
    idConsulta: numeroConsulta,
    diagnosticoConsulta: diagnosticoConsulta,
    pruebasLaboratorio: pruebasLaboratorio
  });

  const actualizarCampos = (name, value) =>
    setDatosConsulta({ ...datosConsulta, [name]: value });

  useEffect(() => {
    const cargarFnc = async () => {
      //obtenemos los datos del personal
      let resPersonalSanitario = await GetPersonalSanitario();
      setPersonalSanitario(resPersonalSanitario);
      console.log("Formulario de RHB: ", route.params);
    };

    cargarFnc();
  }, []);

  return (
    <View style={stylesFormConsultorio.container}>
      <StatusBar style="light" backgroundColor={colors.AppColor} />
      <SafeAreaView>
      <ScrollView
          scrollEnabled={true}
          style={stylesFormRegistrarPaciente.containerForm}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={stylesFormConsultorio.fieldText}>Primer diagnostico</Text>
          <TextInput
            style={stylesFormConsultorio.inputText}
            multiline={true}
            numberOfLines={4}
            placeholder="Redactar primer diagnóstico..........................................."
            onChangeText={(text) =>
              actualizarCampos("diagnosticoConsulta", text)
            }
          />

            <Text style={stylesFormConsultorio.fieldText}>Laboratorio</Text>
          <TextInput
            style={stylesFormConsultorio.inputText}
            multiline={true}
            numberOfLines={4}
            placeholder="Solicitar pruebas de laboratorio........................."
            onChangeText={(text) =>
              actualizarCampos("pruebasLaboratorio", text)
            }
          />
          <TouchableOpacity
            style={stylesFormConsultorio.buttonRegister}
            onPress={async () => {
              console.log("Datos a registrar: ", datosConsulta);
              let res = checkFormFields(datosConsulta);

              if (res > 0) {
                Alert.alert("Error", `Hay ${res} campos vacíos`);
              } else {

                let res = await actualizarConsultaPaciente(
                  datosConsulta
                );
                if (res === 1) {
                  navigation.goBack();
                  Alert.alert("Success", "Consulta realizada!");
                } else {
                  Alert.alert("Failed", "Error al realizar la consulta!");
                }
              }
            }}
          >
            <Text style={{ color: "#fff" }}>Atender</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
