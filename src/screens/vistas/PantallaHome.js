/**
 * importamos useState y useEffect de react
 */

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
  Image,
  ScrollView,
} from "react-native";

import PagerView from "react-native-pager-view";

//importamos las imagenes de prueba
import { imagen1 } from "../../../Uix/medico.png";

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
  SimpleLineIcons,
  Foundation
} from "@expo/vector-icons";

//importamos los estilos de esta pantalla
import { stylesPantallaHome } from "../../styles/styles";

//importamos axios para probar la conexión con la base de datos para testear
import axios from "axios";
import { colors } from "../../styles/colors";

export default function PantallaHome({ route, navigation }) {
  /**
   * useEffect es un método de react que se ejecuta siempre que se carga  o refreca una vista
   * Es decir, todo lo que se ejecute dentro de esa función, es lo primero que se carga.
   */
  useEffect(() => {
    //Esta función verifica la conexión a la base de datos gestion_hospitalaria
    const cargarFnc = async () => {
      let res = await GetAllPatients();
      setPacientes(res);
    };
  });

  return (
    <View style={stylesPantallaHome.container}>
      <StatusBar style="auto" />

      <View style={stylesPantallaHome.containerImagenes}>
        <ScrollView
          style={stylesPantallaHome.scrollContainer}
          contentContainerStyle={{
            flexDirection: 'row',
            justifyContent: "space-around",
            alignItems: "center",
          }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          pagingEnabled={true}
        >
          <View style={stylesPantallaHome.containerImageScroll}>
          <Image style={stylesPantallaHome.imagen} source={require('../../../Uix/medico.png')} />
          </View>
          <View style={stylesPantallaHome.containerImageScroll}>
          <Image style={stylesPantallaHome.imagen} source={require('../../../Uix/paciente.png')} />
          </View>
          <View style={stylesPantallaHome.containerImageScroll}>
          <Image style={stylesPantallaHome.imagen} source={require('../../../Uix/medico-mujer.png')} />
          </View>
          <View style={stylesPantallaHome.containerImageScroll}>
          <Image style={stylesPantallaHome.imagen} source={require('../../../Uix/medico-niño.png')} />
          </View>
        </ScrollView>
      </View>

      <SimpleLineIcons name="options" size={40} color={colors.AppColor} />

      <View style={stylesPantallaHome.containerOpciones}>
        <View style={stylesPantallaHome.containerBotones}>
          <TouchableOpacity style={stylesPantallaHome.botonOpcion} onPress={() => navigation.navigate('Admisión')}>
            <Foundation name= "clipboard-pencil" size={80} color={colors.AppColor} />

            <Text style={stylesPantallaHome.textoOpciones}>Admisión</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesPantallaHome.botonOpcion} onPress={() => navigation.navigate('Consultas')}>
            <FontAwesome5
              name="book-medical"
              size={80}
              color={colors.AppColor}
            />

            <Text style={stylesPantallaHome.textoOpciones}>Consultorio</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesPantallaHome.botonOpcion} onPress={() => navigation.navigate('Laboratorio')}>
            <Fontisto name="test-tube-alt" size={80} color={colors.AppColor} />

            <Text style={stylesPantallaHome.textoOpciones}>Laboratorio</Text>
          </TouchableOpacity>
        </View>

        <View style={stylesPantallaHome.containerBotones}>
          <TouchableOpacity style={stylesPantallaHome.botonOpcion} onPress={() => navigation.navigate('Farmacia')}>
            <Fontisto name="pills" size={80} color={colors.AppColor} />

            <Text style={stylesPantallaHome.textoOpciones}>Farmacia</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesPantallaHome.botonOpcion} onPress={() => navigation.navigate('Rehabilitación')}>
            <FontAwesome5
              name="hand-holding-medical"
              size={80}
              color={colors.AppColor}
            />

            <Text style={stylesPantallaHome.textoOpciones}>Rehabilitación</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesPantallaHome.botonOpcion} onPress={() => navigation.navigate('Vacunación')}>
            <Fontisto
              name="injection-syringe"
              size={80}
              color={colors.AppColor}
            />

            <Text style={stylesPantallaHome.textoOpciones}>Vacunación</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
