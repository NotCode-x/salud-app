
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
    },
    fieldText:{
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20
    }
    
})

//estilos para la pantalla consultas
export const stylesScreenConsultas = StyleSheet.create({

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
        flexDirection: "column",
        padding: 30,
        marginBottom: 10
    },

    nameItem:{
        flexDirection: "row",
    },
    textItem:{
        fontSize: 18,
        fontWeight: '400',
    },

    textDescriptionGrave: {
        fontSize: 14,
        fontWeight: '300',
        color: '#d13939'
    },
    textDescriptionNormal: {
        fontSize: 14,
        fontWeight: '300',
        color: '#d1b539'
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
    },
    fieldText:{
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20
    },
    inputDescripcion:{
        width: '88%',
        height: windowHeight / 8,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#aebab6',
        marginTop: 10,
        padding: 6,
        textAlignVertical: 'top'
    }

})

//estilos para el formulario de nuevo paciente
export const stylesFormLaboratorio = StyleSheet.create({
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

    inputResultados:{
        width: '88%',
        height: windowHeight / 4,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#aebab6',
        marginTop: 10,
        padding: 6,
        textAlignVertical: 'top'
    },

    buttonRegister: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 10
    },
    fieldText:{
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20
    }

})

//estilos para el formulario consultorio
export const stylesFormConsultorio = StyleSheet.create({
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
        height: windowHeight / 4,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#aebab6',
        marginTop: 10,
        padding: 6,
        textAlignVertical: 'top'
    },

    buttonRegister: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 10
    },
    fieldText:{
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20
    }

})
