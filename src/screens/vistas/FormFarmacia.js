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
  Platform,
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
  Fontisto,
} from "@expo/vector-icons";

//modulo para crear botones desplegables o dropdowns
import { Picker } from "@react-native-picker/picker";
//modulo para seleccionar fechas
import DateTimePicker from "@react-native-community/datetimepicker";

import { checkFormFields, checkIfPassword } from "../../functions/generic";

//importamos todas las funciones que usamos para obtener datos de la db
import {
  GetAllMedicamentos,
  GetPersonalSanitario,
} from "../../functions/GetFunctions";

import { stylesFormRegistrarPaciente } from "../../styles/styles";

import { registrarCita, registrarCompraMedicamento } from "../../functions/PostFunctions";

const FormFarmacia = ({ route, navigation }) => {
  //extraemos los parametros que nos envía la ruta anterior, en este caso la pantalla pacientes al hacer cliente en uno de ellos
  //const { apellidosPaciente, nombrePaciente, idPaciente } = route.params;

  //variable que captura los datos que se alamacenarán en la tabla cita
  const [medicamentos, setMedicamentos] = useState("");
  const [personalSanitario, setPersonalSanitario] = useState("");
  const [pwd, setPwd] = useState('')

  const [datosFarmacia, setDatosFarmacia] = useState({
    datosMedicina: "",
    cantidad: 0,
    precioManual: 0,
  });

  const [datosFarmaceutico, setdatosFarmaceutico] = useState({
    data: "",
  });

  const cambioDato = (name, value) =>
    setDatosFarmacia({ ...datosFarmacia, [name]: value });

  const cambioDatoF = (name, value) =>
    setdatosFarmaceutico({ ...datosFarmaceutico, [name]: value });

  useEffect(() => {
    const cargarMedicamentos = async () => {
      let resMedicamentos = await GetAllMedicamentos();
      let resPersonal = await GetPersonalSanitario();
      setMedicamentos(resMedicamentos);
      setPersonalSanitario(resPersonal);
    };

    cargarMedicamentos();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "flex-start", padding: 10 }}>
      <Text>Medicamento: {datosFarmacia.datosMedicina.n}</Text>
      <Text>Precio{datosFarmacia.datosMedicina.p} XAF</Text>
      {medicamentos != "" ? (
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Medicamento</Text>
          <Picker
            selectedValue={datosFarmacia.datosMedicina.n}
            onValueChange={(itemValue, itemIndex) => {
              console.log(itemValue);
              cambioDato("datosMedicina", itemValue);
            }}
          >
            <Picker.Item label="--------------" />
            {medicamentos.map((val, index) => {
              return (
                <Picker.Item
                  key={index}
                  label={val.nombreMedicamento}
                  value={{ n: val.nombreMedicamento, p: val.precioUnitario, stock: val.stock, id: val.idMedicamento }}
                />
              );
            })}
          </Picker>
        </View>
      ) : (
        ""
      )}

      <Text>Precio total</Text>
      <TextInput
        style={stylesFormRegistrarPaciente.inputText}
        placeholder="Precio total..."
        onChangeText={(val) => {
          cambioDato('precioManual', val)
        }}
      />

<Text>Cantidad </Text>
      <TextInput
        style={stylesFormRegistrarPaciente.inputText}
        placeholder="Cantidad..."
        onChangeText={(val) => {
          cambioDato('cantidad', val)
        }}
      />

      <Text>Farmaceútico: {datosFarmaceutico.data.n}</Text>
      {personalSanitario != "" ? (
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Farmaceútico</Text>
          <Picker
            selectedValue={datosFarmaceutico.data.n}
            onValueChange={(itemValue, itemIndex) => {
              console.log("F: ", itemValue);
              cambioDatoF("data", itemValue);
            }}
          >
            <Picker.Item label="--------------" />
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

<Text>Contraseña </Text>
      <TextInput
        style={stylesFormRegistrarPaciente.inputText}
        placeholder="Contraseña de usuario"
        onChangeText={(val) => {
          setPwd(val)
        }}
      />

      <View
        style={{
          width: "100%",
          height: 30,
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
            backgroundColor: "#7cdc97",
            borderRadius: 10,
          }}
          onPress={async () => {
            let {n, cod} = await checkIfPassword(personalSanitario, pwd)

            
            //validar si el codigo del farmaceutico seleccionado es el correcto
            if(n == 1 && cod == datosFarmaceutico.data.c){
              console.log(n, cod)
              let res = checkFormFields(datosFarmacia);

            if (res > 0) {
              Alert.alert("Error", `Hay ${res} campos vacíos`);
            } else {
              console.log(n, cod)
              console.log('ejecuta el registro')
              let res = await registrarCompraMedicamento(datosFarmacia, datosFarmaceutico);

              if (res === 1) {
                navigation.goBack();
                Alert.alert("Success", "Cita registrada con éxito!");
              } else {
                Alert.alert("Failed", "Cita no registrada!");
              }
            }
            }else{
              Alert.alert('Error', 'Código incorrecto')
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
    </View>
  );
};

export default FormFarmacia;
