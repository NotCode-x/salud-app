
import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

//estilos para la primera pantalla de la app donde se introduce la ip del servidor local
export const stylesSplashInit = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    errorViewContainer:{
        width: '80%',
        height: windowHeight / 5,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textError:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    buttonError: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5
    },
    buttonTextError:{
        fontSize: 15,
        color: '#fff',
        
    },
    inputIp:{
        fontSize: 15,
        borderRadius: 10,
        width: '90%',
        height: '30%',
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'center'
    }
})

//estilos para la pantalla pacientes
export const stylesScreenPacientes = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
      },

    containerSearch: {
        width: '90%',
        height: '10%',
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        marginTop: 5,
        marginBottom: 5
    },

    inputSearch:{
        width: '88%',
        height: '70%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#aebab6',
        padding: 6
    },

    buttonAdd: {
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerList: {
        width: windowWidth,
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    flatListStyle:{
        width: windowWidth,
        padding: 10
    },

    ListItemView:{
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#c2c2c2',
        flexDirection: "row",
        padding: 30,
        marginBottom: 10
    },

    nameItem:{
        flexDirection: "row",
    },
    textItem:{
        fontSize: 18,
        fontWeight: '400',
        paddingLeft: 10,
    },

    idItem:{
        fontSize: 18,
        fontWeight: '700'
    }
    
})

//estilos para el formulario de nuevo paciente
export const stylesFormRegistrarPaciente = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },

    containerScroll: {
        width: windowWidth,
        height: windowHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerForm:{
        width: windowWidth,
        height: '100%'
    },
    
    inputText:{
        width: '88%',
        height: windowHeight / 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#aebab6',
        marginTop: 10,
        padding: 6
    },

    buttonRegister: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 10
    }

})
