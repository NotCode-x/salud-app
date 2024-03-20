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
  SafeAreaView,
} from "react-native";

//importamos las funciones genericas
import { checkFormFields, checkIfPassword } from "../../functions/generic";

//importamos las funciones post
import {
  registrarPaciente,
  registrarRehabilitacion,
} from "../../functions/PostFunctions";

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

export default function FormRehabilitar({ route, navigation }) {
  //recibimos los parametros que se han traspado de la pantalla de rehabilitacion a la pantalla del formulario
  const { codigoCita, codigoPaciente, codigoMedico, nombrePaciente } =
    route.params;

  //variable donde se almacena un identificador universal
  let codPaciente = "P" + uuidv4().substring(0, 4);

  //capturamos los datos de todo el personal sanitario
  const [personalSanitario, setPersonalSanitario] = useState("");

  const [password, setPassword] = useState("");

  const [datosPaciente, setDatosPaciente] = useState({
    codigoCita: codigoCita,
    codigoPaciente: codigoPaciente,
    fechaRealizacion: "",
    nombrePaciente: nombrePaciente,
    codigoMedico: codigoMedico,
    tipoRehabilitacion: "",
    diasSemana: "",
    horaCita: "",
    numeroHorasSemana: "",
    tipoLesion: "",
    causaLesion: "",
    progreso: "",
  });

  const actualizarCampos = (name, value) =>
    setDatosPaciente({ ...datosPaciente, [name]: value });

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
      <SafeAreaView>
        <ScrollView
          scrollEnabled={true}
          style={stylesFormRegistrarPaciente.containerForm}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={stylesFormRegistrarPaciente.fieldText}>Tipo </Text>
          <TextInput
            style={stylesFormRegistrarPaciente.inputText}
            placeholder="Tipo de rehabilitación"
            onChangeText={(text) =>
              actualizarCampos("tipoRehabilitacion", text)
            }
          />
          <Text style={stylesFormRegistrarPaciente.fieldText}>Días </Text>
          <TextInput
            style={stylesFormRegistrarPaciente.inputText}
            placeholder="Días de la semana"
            onChangeText={(text) => actualizarCampos("diasSemana", text)}
          />

          <View
            style={{
              width: "100%",
              flexDirection: "row-reverse",
              justifyContent: "space-around",
            }}
          >
            <View style={stylesFormRegistrarPaciente.containerCuatroText}>
              <Text style={stylesFormRegistrarPaciente.fieldText}>
                Hora de la cita
              </Text>
              <TextInput
                style={stylesFormRegistrarPaciente.inputCuatroText}
                placeholder="Hora de la cita"
                onChangeText={(text) => actualizarCampos("horaCita", text)}
              />
            </View>

            <View style={stylesFormRegistrarPaciente.containerCuatroText}>
              <Text style={stylesFormRegistrarPaciente.fieldText}>
                Horas a la semana{" "}
              </Text>
              <TextInput
                style={stylesFormRegistrarPaciente.inputCuatroText}
                keyboardType="number-pad"
                placeholder="Cantidad de horas a la semana"
                onChangeText={(text) =>
                  actualizarCampos("numeroHorasSemana", text)
                }
              />
            </View>
          </View>

          <View style={{
              width: "100%",
              flexDirection: "row-reverse",
              justifyContent: "space-around",
            }}>
            <View style={stylesFormRegistrarPaciente.containerCuatroText}>
              <Text style={stylesFormRegistrarPaciente.fieldText}>Tipo </Text>
              <TextInput
                style={stylesFormRegistrarPaciente.inputCuatroText}
                placeholder="Tipo de lesión"
                onChangeText={(text) => actualizarCampos("tipoLesion", text)}
              />
            </View>

            <View>
              <Text style={stylesFormRegistrarPaciente.fieldText}>Fecha</Text>
              <TextInput
                style={stylesFormRegistrarPaciente.inputCuatroText}
                placeholder="Fecha de realización"
                onChangeText={(text) =>
                  actualizarCampos("fechaRealizacion", text)
                }
              />
            </View>
          </View>

          <Text style={stylesFormRegistrarPaciente.fieldText}>Causa </Text>
          <TextInput
            style={stylesFormRegistrarPaciente.inputCuatroText}
            placeholder="Causa de la lesión"
            onChangeText={(text) => actualizarCampos("causaLesion", text)}
          />
          <Text style={stylesFormRegistrarPaciente.fieldText}>Progreso </Text>
          <TextInput
            style={stylesFormRegistrarPaciente.inputCuatroText}
            placeholder="Progreso de la rehabilitación"
            onChangeText={(text) => actualizarCampos("progreso", text)}
          />

          <Text style={stylesFormRegistrarPaciente.fieldText}>
            Código del personal{" "}
          </Text>
          <TextInput
            style={stylesFormRegistrarPaciente.inputText}
            placeholder="Verificar identidad"
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity
            style={stylesFormRegistrarPaciente.buttonRegister}
            onPress={async () => {
              console.log("Datos a registrar: ", datosPaciente);
              let res = checkFormFields(datosPaciente);

              if (res > 0) {
                Alert.alert("Error", `Hay ${res} campos vacíos`);
              } else {
                let resCheckPwd = await checkIfPassword(
                  personalSanitario,
                  password
                );

                if (resCheckPwd.n > 0) {
                  let res = await registrarRehabilitacion(
                    datosPaciente,
                    resCheckPwd.cod
                  );
                  if (res === 1) {
                    navigation.goBack();
                    Alert.alert("Success", "Rehabilitado con éxito!");
                  } else {
                    Alert.alert("Failed", "Error al rehabilitar paciente!");
                  }
                } else {
                  Alert.alert("Error!", "Código erroneo!!!");
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
