/**
 *
 * Este es el archivo principal donde se crean todas las pantallas de la aplicacion
 * Es decir, aquí se crea el componente padre que contiene todas las pantallas, menús, etc de la app
 */

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

//importamos todas las pantallas que vayamos creando en la ruta src/screens/*

//pantalla de inicio después de cargar la pantalla con el logo de la app
import InitSplashScreen from "./src/screens/splash/InitSplashScreen";

//importamos el menu principal
import MenuPrincipal from "./src/screens/menus/MenuPrincipal";

//importamos todas las pantallas de la app

//pantalla del formulario de registro de nuevo paciente
import FormRegistrarPaciente from "./src/screens/vistas/FormRegistrarPaciente";
import FormRehabilitar from "./src/screens/vistas/FormRehabilitar";
import FormConsultorio from "./src/screens/vistas/FormConsultorio";
import FormLaboratorio from "./src/screens/vistas/FormLaboratorio";
import FormEnfermedad from "./src/screens/vistas/FormEnfermedad";
import FormFarmacia from "./src/screens/vistas/FormFarmacia";

//pantalla para revisar y concertar cita
import PantallaRevisarCita from "./src/screens/vistas/PantallaRevisarCita";

//objeto js que tiene todos los colores que se usa en la app
import { colors } from "./src/styles/colors";

//pantalla para revisar si un pacienta tiene cita previa o no, ahí se decide si atenderle o no

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen
          name="InitSplashScreen"
          component={InitSplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MenuPrincipal"
          component={MenuPrincipal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FormRegistrarPaciente"
          component={FormRegistrarPaciente}
          options={{
            title: "Nuevo paciente",
            headerStyle: {
              backgroundColor: colors.AppColor,
            },
            headerTintColor: "#fff",
          }}
        />

        <Stack.Screen
          name="FormRehabilitar"
          component={FormRehabilitar}
          options={{
            title: "Rehabilitar",
            headerStyle: {
              backgroundColor: colors.AppColor,
            },
            headerTintColor: "#fff",
          }}
        />

        <Stack.Screen
          name="FormConsultorio"
          component={FormConsultorio}
          options={{
            title: "Consulta",
            headerStyle: {
              backgroundColor: colors.AppColor,
            },
            headerTintColor: "#fff",
          }}
        />

        <Stack.Screen
          name="FormLaboratorio"
          component={FormLaboratorio}
          options={{
            title: "Sala de pruebas",
            headerStyle: {
              backgroundColor: colors.AppColor,
            },
            headerTintColor: "#fff",
          }}
        />

        <Stack.Screen
          name="FormEnfermedad"
          component={FormEnfermedad}
          options={{
            title: "Diagnóstco final ",
            headerStyle: {
              backgroundColor: colors.AppColor,
            },
            headerTintColor: "#fff",
          }}
        />

        <Stack.Screen
          name="FormFarmacia"
          component={FormFarmacia}
          options={{
            title: "Farmacia",
            headerStyle: {
              backgroundColor: colors.AppColor,
            },
            headerTintColor: "#fff",
          }}
        />

        <Stack.Screen
          name="PantallaRevisarCita"
          component={PantallaRevisarCita}
          options={{
            title: "Concertar cita",
            headerStyle: {
              backgroundColor: colors.AppColor,
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
