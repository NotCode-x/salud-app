import * as React from "react";
import { SafeAreaView, Text, View, StatusBar } from "react-native";

//importamos un objeto personalizado que tendrá todos los colores de nuestra app
import { colors } from "../../styles/colors";

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

//Este es un componente que nos permite crear navegación entre las pantallas de la app
import { NavigationContainer } from "@react-navigation/native";

//Este es un componente que nos permite crear un menú de navegación inferior en la app
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

//importamos todas las pantallas que se van a mostrar en el menú inferior de la app
import PantallaPacientes from "../vistas/PantallaPacientes";
import PantallaConsultas from "../vistas/PantallaConsultas";
import PantallaCitas from "../vistas/PantallaCitas";
import PantallaAjustes from "../vistas/PantallaAjustes";
import PantallaRehabilitacion from "../vistas/PantallaRehabilitacion";
import PantallaVacunacion from "../vistas/PantallaVacunacion";

//creamos una variable 'Tab' para almacenar el componente createBottomTabNavigator
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function MenuPrincipal({route, navigation}) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                width: "100%",
                height: 180,
                paddingLeft: 15,
                backgroundColor: colors.colorProfileDrawer,
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <FontAwesome name="user-circle" size={70} color="#fff" style={{marginBottom: 10}} />
              <View>
              <Text>Usuario</Text>
              <Text>testcorreo@mail.test</Text>
              </View>
            </View>
            <DrawerItemList {...props}/>
          </SafeAreaView>
        );
      }}
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          if (route.name == "Pacientes") {
            return (
              <FontAwesome5
                name={focused ? "hospital" : "hospital"}
                size={size}
                color={color}
              />
            );
          } else if (route.name == "Consultas") {
            return (
              <FontAwesome5
                name={focused ? "book-medical" : "book-medical"}
                size={size}
                color={color}
              />
            );
          } else if (route.name == "Citas") {
            return (
              <MaterialCommunityIcons
                name={focused ? "calendar-clock" : "calendar-clock"}
                size={size}
                color={color}
              />
            );
          } else if (route.name == "Ajustes") {
            return (
              <MaterialIcons
                name={focused ? "settings" : "settings"}
                size={size}
                color={color}
              />
            );
          }
          else if (route.name == "Rehabilitación") {
            return (
              <FontAwesome5 name={focused ? "hand-holding-medical" : "hand-holding-medical"} size={size}
              color={color} />
            );
          }
          else if (route.name == "Vacunación") {
            return (
              <MaterialIcons
                name={focused ? "health-and-safety" : "health-and-safety"}
                size={size}
                color={color}
              />
            );
          }
        },
        drawerActiveTintColor: "#035c6f",
        drawerInactiveTintColor: "#035c6f",
        headerStyle: {
          backgroundColor: colors.AppColor,
        },
        headerTintColor: "#fff",
        drawerStyle: {
          backgroundColor: "#fff",
        },
      })}
    >
      <Drawer.Screen
        name="Pacientes"
        component={PantallaPacientes}
        options={{}}
      />
      <Drawer.Screen name="Consultas" component={PantallaConsultas} />
      <Drawer.Screen name="Rehabilitación" component={PantallaRehabilitacion} />
      <Drawer.Screen name="Vacunación" component={PantallaVacunacion} />
      <Drawer.Screen name="Ajustes" component={PantallaAjustes} />
    </Drawer.Navigator>
  );
}
