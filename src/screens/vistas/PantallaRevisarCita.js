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

//importamos los estilos para esta pantalla
import { stylesFormRegistrarPaciente, stylesComunes } from "../../styles/styles";

import { checkFormFields } from "../../functions/generic";

//importamos todas las funciones que usamos para obtener datos de la db
import { GetAllMedicos, GetTiposCita } from "../../functions/GetFunctions";

import { registrarCita, registrarConsulta } from "../../functions/PostFunctions";
import { colors } from "../../styles/colors";

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
    tipoCita: "",
  });
  const cambioDato = (name, value) =>
    setDatosCita({ ...datosCita, [name]: value });

  useEffect(() => {
    const cargarMedicos = async () => {
      //console.log('Hola revision...')
      let res = await GetAllMedicos();
      let resTiposCita = await GetTiposCita();

      setMedicos(res);
      setTiposDeCita(resTiposCita);

      console.log("Params: ", route.params);
    };

    cargarMedicos();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "space-around", padding: 25, backgroundColor: '#fff' }}>
      <View style={{ width: '100%', height: '15%', marginTop: 10, justifyContent: 'space-around',  }}>
        <Text style={{ fontSize: 22, fontWeight: "700", textAlign: 'center', borderBottomWidth: 1, borderBottomColor: colors.AppColor, paddingBottom: 15, color: colors.AppColor }}>
        {nombrePaciente + " " + apellidosPaciente}
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
            style={stylesComunes.stylesPicker}
          >
            <Picker.Item
              label="Médicos disponibles !!!!"
              value={medicos[0].codigoMedico}
            />
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
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Tipo de cita</Text>
          <Picker
            selectedValue={datosCita.tipoCita}
            onValueChange={(itemValue, itemIndex) => {
              cambioDato("tipoCita", itemValue);
            }}

            style={stylesComunes.stylesPicker}
          >
            <Picker.Item
              label="Seleccionar motivo de la cita !!!!"
              value={tiposDeCita[0].tipoCita}
            />
           {tiposDeCita.map( (item, index) => {
            return(
              <Picker.Item
                  label={item.tipoCita}
                  value={item.tipoCita}
                />
            )
           })}
          </Picker>
        </View>
      ) : (
        ""
      )}

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View style={stylesFormRegistrarPaciente.containerCuatroText}>
          <Text style={stylesFormRegistrarPaciente.fieldDosText}>
            {" "}
            (año-mes-dia)
          </Text>
          <TextInput
            style={stylesFormRegistrarPaciente.inputCuatroText}
            placeholder="Introduzca la fecha..."
            onChangeText={(text) => cambioDato("fecha", text)}
          />
        </View>
        <View style={stylesFormRegistrarPaciente.containerCuatroText}>
          <Text style={stylesFormRegistrarPaciente.fieldDosText}>
            Hora (h:min)
          </Text>
          <TextInput
            style={stylesFormRegistrarPaciente.inputCuatroText}
            placeholder="Introduzca la hora..."
            onChangeText={(text) => cambioDato("hora", text)}
          />
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: "30%",
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
            let res = checkFormFields(datosCita);

            if (res > 0) {
              Alert.alert("Error", `Hay ${res} campos vacíos`);
            } else {
              let res = await registrarCita(datosCita);
              await registrarConsulta(datosCita)

              if (res === 1) {
                navigation.goBack();
                Alert.alert("Success", "Cita registrada con éxito!");
              } else {
                Alert.alert("Failed", "Cita no registrada!");
              }
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

export default PantallaRevisarCita;
