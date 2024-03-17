/**
 * importamos useState y useEffect de react
 */

import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, SafeAreaView } from 'react-native';

//importamos los estilos para esta pantalla
import { stylesSplashInit } from '../../styles/styles';
//importamos el módulo que nos permite guardar datos en la memoria del dispositivo para la app

/**
 * Este módulo se usará para guardar la ip del servidor local en la memoria cache de la app, para hacer pruebas
 * esto en caso de que no se aloje la aplicación de backend en la nube
 */
import * as SecureStore from 'expo-secure-store';

//importamos axios para probar la conexión con la base de datos para testear
import axios from 'axios';


export default function InitSplashScreen({route, navigation}) {

  //creamos una variable que actualizará su estado para saber si nos hemos conectado a la db
  //con la función setConnection recuperamos o guardamos el resultado de la petición con axios en cargarFnc
  const [connection, setConnection] = useState(0)
  const [localIpServer, setIpServer] = useState('0.0.0.0')

  //con esta función nos conectamos al servidor local introduciendo la ip del server manualmente
  const conexionLocal = async(ip) => {
     console.log(ip)
     
    let req = await axios.get(`http://${ip}/salud-backend/index.php`)
      
      //mostramos el resultado de la petición con axios en consola
      setConnection(req.data)
        await SecureStore.setItemAsync('ipLocal', ip)
        //si nos conectamos a la db entonces navegamos al menú principal
        navigation.navigate('MenuPrincipal')
      console.log("Respuesta local: ", req.data)

  }

  /**
   * useEffect es un método de react que se ejecuta siempre que se carga  o refreca una vista
   * Es decir, todo lo que se ejecute dentro de esa función, es lo primero que se carga.
   */
  useEffect(() => {

    //Esta función verifica la conexión a la base de datos gestion_hospitalaria
    const cargarFnc = async() => {
      let ipCache = await SecureStore.getItemAsync("ipLocal");

      if(ipCache != ''){
        conexionLocal(ipCache)
      }
    }

    //Ejecutamos la función cargarFnc() en useEffect para que sea lo primero en ejecutarse al cargarse la vista
    cargarFnc()
  })

  React.useLayoutEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      let ipCache = await SecureStore.getItemAsync("ipLocal");

      if(ipCache != ''){
        conexionLocal(ipCache)
      }
    });

    return unsubscribe;
  }, []);
  
  return (
    <View style={stylesSplashInit.container}>
      <StatusBar style="auto" />
      
  
      {
         connection === 1 ? <Text>Conectado</Text> : (
          <View style={stylesSplashInit.errorViewContainer}>
              <Text style={stylesSplashInit.textError}>Conexión fallida!</Text>
              <TextInput style={stylesSplashInit.inputIp} autoFocus={true} placeholder='Introduzca la ip del servidor local...' onChangeText={ (text) => {
                setIpServer(text)
              }}/>
              <TouchableOpacity style={stylesSplashInit.buttonError} onPress={() => {
                conexionLocal(localIpServer)
              }}>
                <Text style={stylesSplashInit.buttonTextError}>Conectar</Text>
              </TouchableOpacity>
          </View>
         ) 
      }
      
    </View>
  );
}
