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

//importamos las funciones post
import { registrarEnfermedad } from "../../functions/PostFunctions";

import { GetPersonalSanitario } from "../../functions/GetFunctions";

//importamos los estilos para esta pantalla
import { stylesFormRegistrarPaciente } from "../../styles/styles";

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

export default function FormEnfermedad({ route, navigation }) {
  //recibimos los parametros que se han traspado de la pantalla de rehabilitacion a la pantalla del formulario
  const { numeroConsulta, diagnosticoConsulta, pruebasLaboratorio } =
    route.params;

  //variable donde se almacena un identificador universal
  let codPaciente = "P" + uuidv4().substring(0, 4);

  //capturamos los datos de todo el personal sanitario
  const [personalSanitario, setPersonalSanitario] = useState("");

  const [password, setPassword] = useState("");

  const [datosEnfermedad, setDatosEnfermedad] = useState({
    nombre: "",
    tipo: "",
    sintomas: "",
    descripcion: "",
    id: numeroConsulta,
    receta: "",
  });

  const actualizarCampos = (name, value) =>
    setDatosEnfermedad({ ...datosEnfermedad, [name]: value });

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
    <View style={stylesFormRegistrarPaciente.container}>
      <StatusBar style="light" backgroundColor={colors.AppColor} />
      <View style={stylesFormRegistrarPaciente.containerScroll}>
        <ScrollView
          scrollEnabled={true}
          style={stylesFormRegistrarPaciente.containerForm}
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={stylesFormRegistrarPaciente.fieldText}>
            Nombre de la enfermedad
          </Text>
          <TextInput
            style={stylesFormRegistrarPaciente.inputText}
            placeholder="Nombre de la enfermedad"
            onChangeText={(text) => actualizarCampos("nombre", text)}
          />
          <Text style={stylesFormRegistrarPaciente.fieldText}>
            Tipo de enfermedad
          </Text>
          <TextInput
            style={stylesFormRegistrarPaciente.inputText}
            placeholder="Tipo de enfermedad"
            onChangeText={(text) => actualizarCampos("tipo", text)}
          />

          <Text style={stylesFormRegistrarPaciente.fieldText}>Síntomas</Text>
          <TextInput
            style={stylesFormRegistrarPaciente.inputDescripcion}
            placeholder="Síntomas..................."
            onChangeText={(text) => actualizarCampos("sintomas", text)}
          />

          <Text style={stylesFormRegistrarPaciente.fieldText}>Descripción</Text>

          <TextInput
            style={stylesFormRegistrarPaciente.inputDescripcion}
            placeholder="Descripción de la enfermedad...................."
            onChangeText={(text) => actualizarCampos("descripcion", text)}
          />

          <Text style={stylesFormRegistrarPaciente.fieldText}>Receta</Text>

          <TextInput
            style={stylesFormRegistrarPaciente.inputDescripcion}
            placeholder="Receta...................."
            onChangeText={(text) => actualizarCampos("receta", text)}
          />

          <TouchableOpacity
            style={stylesFormRegistrarPaciente.buttonRegister}
            onPress={async () => {
              console.log("Datos a registrar: ", datosEnfermedad);
              let res = checkFormFields(datosEnfermedad);

              if (res > 0) {
                Alert.alert("Error", `Hay ${res} campos vacíos`);
              } else {
                let res = await registrarEnfermedad(datosEnfermedad);
                if (res === 1) {
                  navigation.goBack();
                  Alert.alert("Success", "Enfermedad registrada!");
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
