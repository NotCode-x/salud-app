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
import { checkFormFields, checkIfPassword } from "../../functions/generic";

import {
  GetPersonalSanitario,
  GetAllAntigenos,
} from "../../functions/GetFunctions";

//importamos las funciones post
import { registrarVacunacion } from "../../functions/PostFunctions";

//importamos los estilos para esta pantalla
import {
  stylesFormRegistrarPaciente,
  stylesFormLaboratorio,
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

export default function FormVacunacion({ route, navigation }) {
  const { apellidosPaciente, nombrePaciente, codigoPaciente, direccion, telefono } =
    route.params;

  //variable que almacena la contraseña del personal responsable
  const [pwd, setPwd] = useState("");

  //capturamos los datos de todo el personal sanitario
  const [personalSanitario, setPersonalSanitario] = useState("");
  const [antigenos, setAntigenos] = useState("");

  //variable donde se almacena un uuid
  let codPaciente = "P" + uuidv4().substring(0, 4);

  const [datosVacunacion, setDatosVacunacion] = useState({
    codigoPaciente: codigoPaciente,
    vacunas: "",
    fechaVisita: "",
    nombrePadre: "Opcional",
    nombreMadre: "Opcional",
    direccion: direccion,
    telefono: telefono,
    data: ''
  });

  const cambioDato = (name, value) =>
    setDatosVacunacion({ ...datosVacunacion, [name]: value });

  useEffect(() => {
    const cargarFnc = async () => {
      //obtenemos los datos del personal
      let resPersonalSanitario = await GetPersonalSanitario();
      setPersonalSanitario(resPersonalSanitario);

      //guardamos todos los antigenos que recibimos de la base de datos
      let resAntigenos = await GetAllAntigenos();
      setAntigenos(resAntigenos);
    };

    cargarFnc();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
        backgroundColor: "#fff",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 20 }}>
        <View
          style={{
            width: "100%",
            height: "10%",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "700",
              textAlign: "center",
              borderBottomWidth: 1,
              borderBottomColor: colors.AppColor,
              paddingBottom: 15,
              color: colors.AppColor,
            }}
          >
            {nombrePaciente + " " + apellidosPaciente}
          </Text>
        </View>

        {antigenos != "" ? (
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Antígeno</Text>
            <Picker
              selectedValue={datosVacunacion.vacunas}
              onValueChange={(itemValue, itemIndex) => {
                cambioDato("vacunas", itemValue);
              }}
              style={stylesComunes.stylesPicker}
            >
              <Picker.Item label="Antígenos" value="" />
              {antigenos.map((val, index) => {
                return (
                  <Picker.Item
                    key={index}
                    label={val.nombreAntigeno}
                    value={val.nombreAntigeno}
                  />
                );
              })}
            </Picker>
          </View>
        ) : (
          ""
        )}

        {personalSanitario != "" ? (
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Auxiliar: <Text style={{color: colors.AppColor, fontWeight: 'normal', fontSize: 16}}>{datosVacunacion.data.n}</Text></Text>
            <Picker
              selectedValue={datosVacunacion.data.n}
              onValueChange={(itemValue, itemIndex) => {
                console.log('personal: ', itemValue)
                cambioDato("data", itemValue);
              }}
              style={stylesComunes.stylesPicker}
            >
              <Picker.Item label="Seleccionar auxiliar" value="" />
              {personalSanitario.map((val, index) => {
                return (
                  <Picker.Item
                    key={index}
                    label={val.nombrePersonal}
                    value={{ n: val.nombrePersonal, c: val.codigoPersonal }}
                  />
                );
              })}
            </Picker>
          </View>
        ) : (
          ""
        )}

        <Text style={stylesFormRegistrarPaciente.fieldText}>
          Nombre del padre
        </Text>
        <TextInput
          style={stylesFormRegistrarPaciente.inputText}
          placeholder="Nombre del padre (Opcional)"
          onChangeText={(text) => cambioDato("nombrePadre", text)}
        />

        <Text style={stylesFormRegistrarPaciente.fieldText}>
          Nombre de la madre
        </Text>
        <TextInput
          style={stylesFormRegistrarPaciente.inputText}
          placeholder="Nombre de la madre (Opcional)"
          onChangeText={(text) => cambioDato("nombreMadre", text)}
        />

        <Text style={stylesFormRegistrarPaciente.fieldText}>
          {" "}
          Fecha(año-mes-dia)
        </Text>
        <TextInput
          style={stylesFormRegistrarPaciente.inputText}
          placeholder="Introduzca la fecha............"
          onChangeText={(text) => cambioDato("fechaVisita", text)}
        />

        <Text style={stylesFormRegistrarPaciente.fieldText}> Contraseña</Text>
        <TextInput
          style={stylesFormRegistrarPaciente.inputText}
          placeholder="Contraseña de usuario"
          onChangeText={(val) => {
            setPwd(val);
          }}
        />

        <View
          style={{
            width: "100%",
            height: 180,
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              width: "35%",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.AppColor,
              borderRadius: 10,
            }}

            onPress={async () => {
                let {n, cod} = await checkIfPassword(personalSanitario, pwd)

                if(n > 0 && cod == datosVacunacion.data.c){

                  let revisarCampos = await checkFormFields(datosVacunacion)

                  if(revisarCampos == 0){
                    let resQuery = await registrarVacunacion(datosVacunacion)
                    console.log('Resultado: ',resQuery)

                    if (resQuery == 1) {
                      navigation.goBack();
                      Alert.alert("Success", "Vacunado");
                    } else {
                      Alert.alert("Failed", "Error al guardar!");
                    }
                  }else{
                    Alert.alert("Error", `Hay ${revisarCampos} campos vacíos`);
                  }
                }else{
                  Alert.alert('Error', 'Código incorrecto!')
                }
              }}
          >
            <Text style={{ fontSize: 17, fontWeight: "800", color: "#fff" }}>
              Atender
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "35%",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ab2c2c",
              borderRadius: 10,
            }}
            onPress={() => navigation.goBack()}
          >
            <Text style={{ fontSize: 17, fontWeight: "800", color: "#fff" }}>
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
