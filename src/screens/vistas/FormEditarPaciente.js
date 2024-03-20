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

//modulo para crear botones desplegables o dropdowns
import { Picker } from "@react-native-picker/picker";

//importamos las funciones genericas
import { checkFormFields } from "../../functions/generic";

import { GetTiposPaciente } from "../../functions/GetFunctions";

//importamos las funciones update
import { actualizarPaciente } from "../../functions/UpdateFunctions";

//importamos los estilos para esta pantalla
import {
  stylesFormRegistrarPaciente,
  stylesComunes,
} from "../../styles/styles";

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

export default function FormEditarPaciente({ route, navigation }) {

  //datos actuales del paciente
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
    tipoPaciente
  } = route.params;

  const [datosPaciente, setDatosPaciente] = useState({
    idPaciente: idPaciente,
    nombre: nombrePaciente,
    apellidos: apellidosPaciente,
    fechaNacimiento: fechaNacimientoPaciente,
    sexo: sexoPaciente,
    peso: pesoPaciente,
    altura: alturaPaciente,
    telefono: telefonoPaciente,
    direccion: direccionPaciente,
    alergia: alergiaPaciente,
    nacionalidad: nacionalidadPaciente,
    codigoTipoPaciente: tipoPaciente
  });

  //variable para almacenar los tipos de paciente que hay en la base de datos
  const [tiposPaciente, setTiposPaciente] = useState("");

  const actualizarCampos = (name, value) =>
    setDatosPaciente({ ...datosPaciente, [name]: value });

    useEffect(() => {
      const cargarFnc = async () => {
        let res = await GetTiposPaciente();
  
        setTiposPaciente(res);
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
          <Text style={stylesFormRegistrarPaciente.fieldText}>Nombre</Text>
          <TextInput
            style={stylesFormRegistrarPaciente.inputText}
            defaultValue={nombrePaciente}
            placeholder="Nombre del paciente"
            onChangeText={(text) => actualizarCampos("nombre", text)}
          />
          <Text style={stylesFormRegistrarPaciente.fieldText}>Apellidos</Text>
          <TextInput
            style={stylesFormRegistrarPaciente.inputText}
            defaultValue={apellidosPaciente}
            placeholder="Apellidos del paciente"
            onChangeText={(text) => actualizarCampos("apellidos", text)}
          />

{tiposPaciente != "" ? (
            <View style={{width: '94%' }}>
              <Text style={stylesFormRegistrarPaciente.fieldText}>
                Tipo de paciente
              </Text>
              <Picker
                selectedValue={datosPaciente.codigoTipoPaciente}
                onValueChange={(itemValue, itemIndex) => {
                  actualizarCampos("codigoTipoPaciente", itemValue);
                }}
                style={stylesComunes.stylesPicker}
              >
                {tiposPaciente.map((item, index) => {
                  return (
                    <Picker.Item key={index} label={item.descripcion + " (" + item.codigo + ")"} value={item.codigo} />
                  );
                })}
              </Picker>
            </View>
          ) : (
            ""
          )}

          <View
            style={{
              width: "100%",
              flexDirection: "row-reverse",
              justifyContent: "space-around",
            }}
          >
            <View style={stylesFormRegistrarPaciente.containerCuatroText}>
              <Text style={stylesFormRegistrarPaciente.fieldText}>
                Fecha de nacimiento
              </Text>
              <TextInput
                style={stylesFormRegistrarPaciente.inputCuatroText}
                defaultValue={fechaNacimientoPaciente}
                placeholder="Fecha de nacimiento"
                onChangeText={(text) =>
                  actualizarCampos("fechaNacimiento", text)
                }
              />
            </View>
            <View style={stylesFormRegistrarPaciente.containerCuatroText}>
              <Text style={stylesFormRegistrarPaciente.fieldText}>Sexo</Text>
              <TextInput
                style={stylesFormRegistrarPaciente.inputCuatroText}
                defaultValue={sexoPaciente}
                placeholder="Sexo del paciente"
                onChangeText={(text) => actualizarCampos("sexo", text)}
              />
            </View>
          </View>

          <View
            style={{
              width: "100%",
              flexDirection: "row-reverse",
              justifyContent: "space-around",
            }}
          >
            <View style={stylesFormRegistrarPaciente.containerCuatroText}>
              <Text style={stylesFormRegistrarPaciente.fieldText}>Peso</Text>
              <TextInput
                style={stylesFormRegistrarPaciente.inputCuatroText}
                defaultValue={pesoPaciente}
                keyboardType="number-pad"
                placeholder="Peso del paciente"
                onChangeText={(text) => actualizarCampos("peso", text)}
              />
            </View>
            <View style={stylesFormRegistrarPaciente.containerCuatroText}>
              <Text style={stylesFormRegistrarPaciente.fieldText}>Altura</Text>
              <TextInput
                style={stylesFormRegistrarPaciente.inputCuatroText}
                defaultValue={alturaPaciente}
                keyboardType="number-pad"
                placeholder="Altura del paciente"
                onChangeText={(text) => actualizarCampos("altura", text)}
              />
            </View>
          </View>

          <View
            style={{
              width: "100%",
              flexDirection: "row-reverse",
              justifyContent: "space-around",
            }}
          >
            <View style={stylesFormRegistrarPaciente.containerCuatroText}>
              <Text style={stylesFormRegistrarPaciente.fieldText}>
                Teléfono
              </Text>
              <TextInput
                style={stylesFormRegistrarPaciente.inputCuatroText}
                defaultValue={telefonoPaciente}
                keyboardType="number-pad"
                placeholder="Teléfono del paciente"
                onChangeText={(text) => actualizarCampos("telefono", text)}
              />
            </View>
            <View style={stylesFormRegistrarPaciente.containerCuatroText}>
              <Text style={stylesFormRegistrarPaciente.fieldText}>
                Dirección
              </Text>
              <TextInput
                style={stylesFormRegistrarPaciente.inputCuatroText}
                defaultValue={direccionPaciente}
                keyboardType="number-pad"
                placeholder="Dirección del paciente"
                onChangeText={(text) => actualizarCampos("direccion", text)}
              />
            </View>
          </View>

          <Text style={stylesFormRegistrarPaciente.fieldText}>Alergias</Text>
          <TextInput
            style={stylesFormRegistrarPaciente.inputText}
            defaultValue={alergiaPaciente}
            placeholder="Alergias del paciente"
            onChangeText={(text) => actualizarCampos("alergia", text)}
          />
          <Text style={stylesFormRegistrarPaciente.fieldText}>
            Nacionalidad
          </Text>
          <TextInput
            style={stylesFormRegistrarPaciente.inputText}
            defaultValue={nacionalidadPaciente}
            placeholder="Nacionalidad"
            onChangeText={(text) => actualizarCampos("nacionalidad", text)}
          />

          <TouchableOpacity
            style={stylesFormRegistrarPaciente.buttonRegister}
            onPress={async () => {
              console.log("Datos a actualizar: ", datosPaciente);
              let res = checkFormFields(datosPaciente);

              if (res > 0) {
                Alert.alert("Error", `Hay ${res} campos vacíos`);
              } else {
                let res = await actualizarPaciente(datosPaciente);

                if (res === 1) {
                  navigation.goBack();
                  Alert.alert("Success", "Datos del paciente actualizados");
                } else {
                  Alert.alert("Failed", "Error al guardar!");
                }
              }
            }}
          >
            <Text style={{ color: "#fff" }}>Guardar</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
