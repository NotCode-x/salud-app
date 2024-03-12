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
  Alert
} from "react-native";

//importamos las funciones genericas
import { checkFormFields } from "../../functions/generic";

//importamos las funciones post
import { registrarPaciente } from "../../functions/PostFunctions";

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

export default function FormRegistrarPaciente({ route, navigation }) {
  //variable donde se almacena un uuid
  let codPaciente = "P" + uuidv4().substring(0, 4);

  const [datosPaciente, setDatosPaciente] = useState({
    codigo: codPaciente,
    nombre: '',
    apellidos: '',
    fechaNacimiento: '',
    sexo: '',
    peso: '',
    altura: '',
    telefono: '',
    direccion: '',
    alergia: '',
    nacionalidad: ''
  })

  const actualizarCampos = (name, value) => setDatosPaciente({...datosPaciente, [name]: value})
  
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
          <TextInput
            style={stylesFormRegistrarPaciente.inputText}
            placeholder="Nombre del paciente"
            onChangeText={(text) => actualizarCampos('nombre', text)}
          />
          <TextInput
            style={stylesFormRegistrarPaciente.inputText}
            placeholder="Apellidos del paciente"
            onChangeText={(text) => actualizarCampos('apellidos', text)}
          />
          <TextInput
            style={stylesFormRegistrarPaciente.inputText}
            placeholder="Fecha de nacimiento"
            onChangeText={(text) => actualizarCampos('fechaNacimiento', text)}
          />
          <TextInput
            style={stylesFormRegistrarPaciente.inputText}
            placeholder="Sexo del paciente"
            onChangeText={(text) => actualizarCampos('sexo', text)}
          />
          <TextInput
            style={stylesFormRegistrarPaciente.inputText}
            keyboardType="number-pad"
            placeholder="Peso del paciente"
            onChangeText={(text) => actualizarCampos('peso', text)}
          />
          <TextInput
            style={stylesFormRegistrarPaciente.inputText}
            keyboardType="number-pad"
            placeholder="Altura del paciente"
            onChangeText={(text) => actualizarCampos('altura', text)}
          />
          <TextInput
            style={stylesFormRegistrarPaciente.inputText}
            keyboardType="phone-pad"
            placeholder="Teléfono del paciente"
            onChangeText={(text) => actualizarCampos('telefono', text)}
          />
          <TextInput
            style={stylesFormRegistrarPaciente.inputText}
            placeholder="Dirección del paciente"
            onChangeText={(text) => actualizarCampos('direccion', text)}
          />
          <TextInput
            style={stylesFormRegistrarPaciente.inputText}
            placeholder="Alergias del paciente"
            onChangeText={(text) => actualizarCampos('alergia', text)}
          />
          <TextInput
            style={stylesFormRegistrarPaciente.inputText}
            placeholder="Nacionalidad"
            onChangeText={(text) => actualizarCampos('nacionalidad', text)}
          />

          <TouchableOpacity style={stylesFormRegistrarPaciente.buttonRegister} onPress={async() => {
            console.log("Datos a registrar: ", datosPaciente)
             let res = checkFormFields(datosPaciente)

             if(res > 0){
                Alert.alert('Error', `Hay ${res} campos vacíos`)
             }else{
                let res = await registrarPaciente(datosPaciente)

                if(res === 1){
                  navigation.goBack()
                  Alert.alert("Success", "Paciente registrado con éxito!")
                }else{
                  Alert.alert("Failed", "Paciente no registrado!")
                }
             }
          }}>
            <Text style={{ color: "#fff" }}>Registrar paciente</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
