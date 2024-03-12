/**
 * importamos useState y useEffect de react
 */

import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//importamos axios para probar la conexión con la base de datos para testear
import axios from 'axios';


export default function PantallaConsultas() {

  //creamos una variable que actualizará su estado para saber si nos hemos conectado a la db
  //con la función setConnection recuperamos o guardamos el resultado de la petición con axios en cargarFnc
  const [connection, setConnection] = useState('')

  /**
   * useEffect es un método de react que se ejecuta siempre que se carga  o refreca una vista
   * Es decir, todo lo que se ejecute dentro de esa función, es lo primero que se carga.
   */
  useEffect(() => {

    //Esta función verifica la conexión a la base de datos gestion_hospitalaria
    const cargarFnc = async() => {
      //let req = await axios.get("http://192.168.0.105/salud-backend/index.php")
      
      //mostramos el resultado de la petición con axios en consola
      //setConnection(req.data)
      //console.log("Res: ", req.data)
      let x;
    }

    //ejecutamos la función cargarFnc() en useEffect para que sea lo primero en ejecutarse al cargarse la vista
    cargarFnc()
  })
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Text>
      Pantalla de consultas
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});