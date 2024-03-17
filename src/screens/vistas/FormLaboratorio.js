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
} from "react-native";

//importamos las funciones genericas
import { checkFormFields, checkIfPassword } from "../../functions/generic";

//importamos las funciones post para actualizar campos
import { actualizarResultadosConsulta } from "../../functions/UpdateFunctions";

import { GetPersonalSanitario } from "../../functions/GetFunctions";

//importamos los estilos para esta pantalla
import { stylesFormLaboratorio } from "../../styles/styles";

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

export default function FormLaboratorio({ route, navigation }) {
  //recibimos los parametros que se han traspado de la pantalla de consultas a la pantalla del formulario
  const { numeroConsulta, diagnosticoConsulta, pruebasLaboratorio, nombrePaciente, apellidosPaciente } =
    route.params;

  //variable donde se almacena un identificador universal
  let codPaciente = "P" + uuidv4().substring(0, 4);

  //capturamos los datos de todo el personal sanitario
  const [personalSanitario, setPersonalSanitario] = useState("");

  const [password, setPassword] = useState("");

  const [datosConsulta, setDatosLab] = useState({
    idConsulta: numeroConsulta,
    resultadosLaboratorio: '',
    precio: ''
  });

  const actualizarCampos = (name, value) =>
  setDatosLab({ ...datosConsulta, [name]: value });

  useEffect(() => {
    const cargarFnc = async () => {
      //obtenemos los datos del personal
      let resPersonalSanitario = await GetPersonalSanitario();
      setPersonalSanitario(resPersonalSanitario);
      console.log("Formulario de Laboratorio: ", route.params);
    };

    cargarFnc();
  }, []);

  return (
    <View style={stylesFormLaboratorio.container}>
      <StatusBar style="light" backgroundColor={colors.AppColor} />
      <View style={stylesFormLaboratorio.containerScroll}>
        <ScrollView
          scrollEnabled={true}
          style={stylesFormLaboratorio.containerForm}
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >

            <View>
            <Text style={stylesFormLaboratorio.fieldText}>Paciente</Text>
            <Text>{nombrePaciente} {apellidosPaciente}</Text>
            <Text></Text>
            <Text style={stylesFormLaboratorio.fieldText}>Pruebas a realizar</Text>
            <Text>{pruebasLaboratorio}</Text>
            </View>

            <Text style={stylesFormLaboratorio.fieldText}>Resultados</Text>
          <TextInput
            style={stylesFormLaboratorio.inputResultados}
            multiline={true}
            numberOfLines={4}
            placeholder="Resultaddos de los análisis........................."
            onChangeText={(text) =>
              actualizarCampos("resultadosLaboratorio", text)
            }
          />

<Text style={stylesFormLaboratorio.fieldText}>Precio</Text>

<TextInput
            style={stylesFormLaboratorio.inputText}
            keyboardType="number-pad"
            placeholder="Monto a pagar"
            onChangeText={(text) => actualizarCampos("precio", text)}
          />
          <TouchableOpacity
            style={stylesFormLaboratorio.buttonRegister}
            onPress={async () => {
              console.log("Datos a registrar: ", datosConsulta);
              let res = checkFormFields(datosConsulta);

              if (res > 0) {
                Alert.alert("Error", `Hay ${res} campos vacíos`);
              } else {

                let res = await actualizarResultadosConsulta(
                  datosConsulta
                );
                if (res === 1) {
                  navigation.goBack();
                  Alert.alert("Success", "Resultados agreados con éxito!");
                } else {
                  Alert.alert("Failed", "Error al agregar resultados!");
                }
              }
            }}
          >
            <Text style={{ color: "#fff" }}>Atender</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
