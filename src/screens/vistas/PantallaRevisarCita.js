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
  Alert
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

import { checkFormFields } from "../../functions/generic";

//importamos todas las funciones que usamos para obtener datos de la db
import { GetAllMedicos, GetTiposCita } from "../../functions/GetFunctions";

import { registrarCita } from "../../functions/PostFunctions";

const PantallaRevisarCita = ({ route, navigation }) => {
  //extraemos los parametros que nos envía la ruta anterior, en este caso la pantalla pacientes al hacer cliente en uno de ellos
  const { apellidosPaciente, nombrePaciente, idPaciente } = route.params;

  const [medicos, setMedicos] = useState("");
  const [tiposDeCita, setTiposDeCita] = useState("");


  //variable que captura los datos que se alamacenarán en la tabla cita
  const [datosCita, setDatosCita] = useState({
    codigoPaciente: idPaciente,
    codigoMedico: "",
    fecha: "",
    hora: "",
    tipoCita: ""
  });
  const cambioDato = (name, value) =>
    setDatosCita({ ...datosCita, [name]: value });

  useEffect(() => {
    const cargarMedicos = async () => {
      //console.log('Hola revision...')
      let res = await GetAllMedicos();
      let resTiposCita = await GetTiposCita()

      setMedicos(res);
      setTiposDeCita(resTiposCita)

      console.log("Params: ", route.params);
    };

    cargarMedicos();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "flex-start", padding: 10 }}>
      <View style={{ marginBottom: 25 }}>
        <Text style={{ fontSize: 35, fontWeight: "700" }}>Paciente actual</Text>
        <Text style={{ fontSize: 24, fontWeight: "300", marginBottom: 10 }}>
          {nombrePaciente + " " + apellidosPaciente}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Fecha prevista</Text>
        <Text style={{ fontSize: 20, fontWeight: "300" }}>
          {datosCita.fecha != "" || datosCita.hora != "" ? (
            <Text>
              {datosCita.fecha} | {datosCita.hora}h
            </Text>
          ) : (
            ""
          )}
        </Text>
      </View>
      {medicos != "" ? (
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            Asignar médico
          </Text>
          <Picker
            selectedValue={datosCita.codigoMedico}
            onValueChange={(itemValue, itemIndex) => {
              cambioDato("codigoMedico", itemValue);
            }}
          >
            <Picker.Item label="Médicos disponibles !!!!" value={medicos[0].codigoMedico}/>
            {medicos.map((val, index) => {
              return (
                <Picker.Item
                  key={index}
                  label={val.nombreMedico + " " + val.apellidosMedico}
                  value={val.codigoMedico}
                />
              );
            })}
          </Picker>
        </View>
      ) : (
        ""
      )}

{tiposDeCita != "" ? (
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            Tipo de cita
          </Text>
          <Picker
            selectedValue={datosCita.tipoCita}
            onValueChange={(itemValue, itemIndex) => {
              cambioDato("tipoCita", itemValue);
            }}
          >
            <Picker.Item label="Seleccionar motivo de la cita !!!!" value={tiposDeCita[0].tipoCita}/>
            {tiposDeCita.map((val, index) => {
              return (
                <Picker.Item
                  key={index}
                  label={val.tipoCita}
                  value={val.tipoCita}
                />
              );
            })}
          </Picker>
        </View>
      ) : (
        ""
      )}

      <View style={{ marginBottom: 50 }}>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>
          Formato de fecha (año-mes-dia)
        </Text>
        <TextInput
          style={{
            width: "50%",
            borderWidth: 1,
            height: 50,
            marginBottom: 10,
            borderRadius: 10,
            padding: 3,
            marginTop: 10
          }}
          placeholder="Introduzca la fecha..."
          onChangeText={(text) => cambioDato("fecha", text)}
        />
        <Text style={{ fontSize: 20, fontWeight: "700" }}>
          Hora (hora:minutos)
        </Text>
        <TextInput
          style={{
            width: "40%",
            borderWidth: 1,
            height: 50,
            marginBottom: 10,
            borderRadius: 10,
            padding: 3,
            marginTop: 10
          }}
          placeholder="Introduzca la hora..."
          onChangeText={(text) => cambioDato("hora", text)}
        />
      </View>

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
            borderRadius: 10
          }}

          onPress={async() => {

            let res = checkFormFields(datosCita)

             if(res > 0){
                Alert.alert('Error', `Hay ${res} campos vacíos`)
             }else{
                let res = await registrarCita(datosCita)

                if(res === 1){
                  navigation.goBack()
                  Alert.alert("Success", "Cita registrada con éxito!")
                }else{
                  Alert.alert("Failed", "Cita no registrada!")
                }
             }
            
          }}
        >
          <Text style={{fontSize: 17, fontWeight: '800', color: '#fff'}}>Atender</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "35%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ab2c2c",
            borderRadius: 10
          }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{fontSize: 17, fontWeight: '800', color: '#fff'}}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PantallaRevisarCita;
