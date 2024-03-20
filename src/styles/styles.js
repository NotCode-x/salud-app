import { StyleSheet, Dimensions } from "react-native";
import { colors } from "./colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

//estilos para la primera pantalla de la app donde se introduce la ip del servidor local
export const stylesSplashInit = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  errorViewContainer: {
    width: "80%",
    height: windowHeight / 5,
    justifyContent: "space-around",
    alignItems: "center",
  },
  textError: {
    fontSize: 15,
    fontWeight: "bold",
  },
  buttonError: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
  },
  buttonTextError: {
    fontSize: 15,
    color: "#fff",
  },
  inputIp: {
    fontSize: 15,
    borderRadius: 10,
    width: "90%",
    height: "30%",
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: "center",
  },
});

//estilos para la pantalla pacientes
export const stylesScreenPacientes = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  containerSearch: {
    width: "90%",
    height: windowHeight / 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
  },

  inputSearch: {
    width: "88%",
    height: "70%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#aebab6",
    padding: 6,
  },

  inputSearchDos: {
    width: "100%",
    height: "70%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#aebab6",
    padding: 6,
  },

  buttonAdd: {
    width: "10%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  containerList: {
    width: windowWidth,
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },

  flatListStyle: {
    width: windowWidth,
  },

  ListItemView: {
    width: "90%",
    height: "auto",
    borderColor: "#c2c2c2",
    justifyContent: "space-around",
    padding: 30,
    marginBottom: 10,
    borderRadius: 15,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    backgroundColor: "#fff",
  },

  ListItemViewDos: {
    width: windowWidth - 50,
    height: "auto",
    borderColor: "#c2c2c2",
    justifyContent: "space-around",
    padding: 30,
    marginBottom: 10,
    borderRadius: 15,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    backgroundColor: "#fff",
  },

  nameItem: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  textItem: {
    fontSize: 18,
    fontWeight: "400",
  },

  textApellido: {
    fontSize: 18,
    fontWeight: "400",
    marginLeft: 5,
  },

  idItem: {
    fontSize: 18,
    fontWeight: "700",
  },
  fieldText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
});

//estilos para la pantalla consultas
export const stylesScreenConsultas = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  containerSearch: {
    width: "90%",
    height: windowHeight / 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
  },

  inputSearch: {
    width: "88%",
    height: "70%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#aebab6",
    padding: 6,
  },

  inputSearchDos: {
    width: "100%",
    height: "70%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#aebab6",
    padding: 6,
  },

  inputDosSearch: {
    width: "88%",
    height: "70%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#aebab6",
    padding: 6,
  },

  buttonAdd: {
    width: "10%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  containerList: {
    width: windowWidth,
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },

  flatListStyle: {
    width: windowWidth,
    padding: 10,
    
  },

  ListItemView: {
    width: windowWidth - 50,
    borderBottomWidth: 1,
    borderBottomColor: "#c2c2c2",
    flexDirection: "column",
    padding: 30,
    marginBottom: 10,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    backgroundColor: "#fff",
    borderRadius: 10
  },

  nameItem: {
    flexDirection: "row",
  },
  textItem: {
    fontSize: 18,
    fontWeight: "400",
  },

  textDescriptionGrave: {
    fontSize: 14,
    fontWeight: "300",
    color: "#d13939",
  },
  textDescriptionNormal: {
    fontSize: 14,
    fontWeight: "300",
    color: "#d1b539",
  },

  idItem: {
    fontSize: 18,
    fontWeight: "700",
  },
});

//estilos para el formulario de nuevo paciente
export const stylesFormRegistrarPaciente = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  containerScroll: {
    width: windowWidth,
    height: windowHeight,
    justifyContent: "center",
    alignItems: "center",
  },

  containerForm: {
    width: windowWidth,
    height: windowHeight,
  },
  inputDosText: {
    width: "45%",
    height: windowHeight / 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#aebab6",
    marginTop: 10,
    padding: 6,
  },

  inputCuatroText: {
    width: "90%",
    height: windowHeight / 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#aebab6",
    marginTop: 10,
    padding: 6,
    
  },

  containerCuatroText: {
    width: "50%",
    alignItems: "center",
    
  },

  inputText: {
    width: "95%",
    height: windowHeight / 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#aebab6",
    marginTop: 10,
    padding: 6,
  },

  buttonRegister: {
    backgroundColor: colors.AppColor,
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 10,
  },
  fieldText: {
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "left",
    paddingLeft: 10,
  },
  fieldDosText: {
    width: "100%",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "left",
    paddingLeft: 10,
  },
  inputDescripcion: {
    width: "88%",
    height: windowHeight / 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#aebab6",
    marginTop: 10,
    padding: 6,
    textAlignVertical: "top",
  },
});

//estilos para el formulario de nuevo paciente
export const stylesFormLaboratorio = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  containerScroll: {
    width: windowWidth,
    height: windowHeight,
    justifyContent: "center",
    alignItems: "center",
  },

  containerForm: {
    width: windowWidth,
    height: "100%",
  },

  inputText: {
    width: "88%",
    height: windowHeight / 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#aebab6",
    marginTop: 10,
    padding: 6,
  },

  inputTresText: {
    width: "88%",
    height: windowHeight / 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#aebab6",
    marginTop: 10,
    padding: 6,
  },

  inputResultados: {
    width: "88%",
    height: windowHeight / 6,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#aebab6",
    marginTop: 10,
    padding: 6,
    textAlignVertical: "top",
  },

  buttonRegister: {
    backgroundColor: colors.AppColor,
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 10,
    alignItems: 'center'
  },
  fieldText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
});

//estilos para el formulario consultorio
export const stylesFormConsultorio = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  containerScroll: {
    width: windowWidth,
    height: windowHeight,
    justifyContent: "center",
    alignItems: "center",
  },

  containerForm: {
    width: windowWidth,
    height: "100%",
  },

  inputText: {
    width: "88%",
    height: windowHeight / 4,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#aebab6",
    marginTop: 10,
    padding: 6,
    textAlignVertical: "top",
  },

  buttonRegister: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 10,
  },
  fieldText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
});

//estilos para la pantalla home
export const stylesPantallaHome = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  containerImagenes: {
    width: windowWidth,
    height: "32%",
    alignItems: "center",
    marginTop: 10,
  },

  containerOpciones: {
    width: windowWidth,
    height: "60%",
    alignItems: "center",
  },

  scrollContainer: {
    width: windowWidth,
    height: "100%",
  },

  containerBotones: {
    width: "100%",
    height: "42%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  botonOpcion: {
    width: "auto",
    height: "100%",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
  },
  textoOpciones: { fontSize: 15, fontWeight: "bold" },

  containerImageScroll: {
    width: windowWidth - 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  imagen: {
    width: "80%",
    height: "100%",
  },
});

//estilos generales o comunes
export const stylesComunes = StyleSheet.create({
  containerDosBotones: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  botonAccess: {
    width: "45%",
    backgroundColor: "#36948c",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  botonEditar: {
    width: "45%",
    backgroundColor: colors.botonEditar,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  textoBotons: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },

  stylesPicker: {
    width: "100%",
    elevation: 8,
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    backgroundColor: "#fff",
  },
});
