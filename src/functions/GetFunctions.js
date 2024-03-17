
/**
 * 
 * Todas las consultas a la base de datos se ejecutarán con axios
 */

//importamos axios
import  axios  from "axios"
// guarda los datos de la ip del servidor de pruebas en la memoria cache de la app
import * as SecureStore from "expo-secure-store";

// creamos la función GetAllPatiens para llamar a todos los pacientes de la base de datos
export const GetAllPatients = async() => {

    let localIpServer = await SecureStore.getItemAsync("ipLocal");

    let req = await axios.get(`http://${localIpServer}/salud-backend/get_functions/get_pacientes.php`)

    return req.data

    console.log(req.data)
}

export const GetAllMedicos = async() => {

    let localIpServer = await SecureStore.getItemAsync("ipLocal");

    let req = await axios.get(`http://${localIpServer}/salud-backend/get_functions/get_medicos.php`)
    console.log('Médicos: ', req.data)
    return req.data

    
}


export const GetTiposCita = async() => {

    let localIpServer = await SecureStore.getItemAsync("ipLocal");

    let req = await axios.get(`http://${localIpServer}/salud-backend/get_functions/get_tipo_cita.php`)
    console.log('Tipos de cita: ', req.data)
    return req.data

}

export const GetTipoConsulta = async() => {

    let localIpServer = await SecureStore.getItemAsync("ipLocal");

    let req = await axios.get(`http://${localIpServer}/salud-backend/get_functions/get_tipo_consulta.php`)
    console.log('Tipos de consulta: ', req.data)
    return req.data

}

export const GetCitasRehabilitacion = async() => {

    let localIpServer = await SecureStore.getItemAsync("ipLocal");

    let req = await axios.get(`http://${localIpServer}/salud-backend/get_functions/get_citas_rehabilitacion.php`)
    console.log('Rehabilitaciones: ', req.data)
    return req.data

    
}

export const GetPersonalSanitario = async() => {

    let localIpServer = await SecureStore.getItemAsync("ipLocal");

    let req = await axios.get(`http://${localIpServer}/salud-backend/get_functions/get_personal_sanitario.php`)
    console.log('Personal sanitario: ', req.data)
    return req.data

}

export const GetAllConsultas = async() => {

    let localIpServer = await SecureStore.getItemAsync("ipLocal");

    let req = await axios.get(`http://${localIpServer}/salud-backend/get_functions/get_consultas.php`)
    console.log('Todas las consultas: ', req.data)
    return req.data

}
//
export const GetAllMedicamentos = async() => {

    let localIpServer = await SecureStore.getItemAsync("ipLocal");

    let req = await axios.get(`http://${localIpServer}/salud-backend/get_functions/get_medicamentos.php`)
    console.log('Todos los medicamentos: ', req.data)
    return req.data

}