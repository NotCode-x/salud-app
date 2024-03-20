/**
 *
 * Todas las consultas a la base de datos se ejecutarán con axios
 */

//importamos axios
import axios from "axios";
// guarda los datos de la ip del servidor de pruebas en la memoria cache de la app
import * as SecureStore from "expo-secure-store";

// creamos la función GetAllPatiens para llamar a todos los pacientes de la base de datos
export const GetAllPatients = async () => {
  let localIpServer = await SecureStore.getItemAsync("ipLocal");

  let req = await axios.get(
    `http://${localIpServer}/salud-backend/get_functions/get_pacientes.php`
  );

  return req.data;

  console.log(req.data);
};

export const GetAllMedicos = async () => {
  let localIpServer = await SecureStore.getItemAsync("ipLocal");

  let req = await axios.get(
    `http://${localIpServer}/salud-backend/get_functions/get_medicos.php`
  );
  console.log("Médicos: ", req.data);
  return req.data;
};

export const GetTiposCita = async () => {
  let localIpServer = await SecureStore.getItemAsync("ipLocal");

  let req = await axios.get(
    `http://${localIpServer}/salud-backend/get_functions/get_tipo_cita.php`
  );
  console.log("Tipos de cita: ", req.data);
  return req.data;
};

export const GetTipoConsulta = async () => {
  let localIpServer = await SecureStore.getItemAsync("ipLocal");

  let req = await axios.get(
    `http://${localIpServer}/salud-backend/get_functions/get_tipo_consulta.php`
  );
  console.log("Tipos de consulta: ", req.data);
  return req.data;
};

export const GetCitasRehabilitacion = async () => {
  let localIpServer = await SecureStore.getItemAsync("ipLocal");

  let req = await axios.get(
    `http://${localIpServer}/salud-backend/get_functions/get_citas_rehabilitacion.php`
  );
  console.log("Rehabilitaciones: ", req.data);
  return req.data;
};

export const GetCitasVacunacion = async () => {
  let localIpServer = await SecureStore.getItemAsync("ipLocal");

  let req = await axios.get(
    `http://${localIpServer}/salud-backend/get_functions/get_citas_vacunacion.php`
  );
  console.log("citas vacunación: ", req.data);
  return req.data;
};

export const GetPersonalSanitario = async () => {
  let localIpServer = await SecureStore.getItemAsync("ipLocal");

  let req = await axios.get(
    `http://${localIpServer}/salud-backend/get_functions/get_personal_sanitario.php`
  );
  console.log("Personal sanitario: ", req.data);
  return req.data;
};

export const GetAllConsultas = async () => {
  let localIpServer = await SecureStore.getItemAsync("ipLocal");

  let req = await axios.get(
    `http://${localIpServer}/salud-backend/get_functions/get_consultas.php`
  );
  console.log("Todas las consultas: ", req.data);
  return req.data;
};
//
export const GetAllMedicamentos = async () => {
  let localIpServer = await SecureStore.getItemAsync("ipLocal");

  let req = await axios.get(
    `http://${localIpServer}/salud-backend/get_functions/get_medicamentos.php`
  );
  console.log("Todos los medicamentos: ", req.data);
  return req.data;
};

export const GetAllAntigenos = async () => {
  let localIpServer = await SecureStore.getItemAsync("ipLocal");

  let req = await axios.get(
    `http://${localIpServer}/salud-backend/get_functions/get_antigenos.php`
  );
  console.log("Todos los antigenos: ", req.data);
  return req.data;
};

export const GetTiposPaciente = async () => {
  let localIpServer = await SecureStore.getItemAsync("ipLocal");
  let req = await axios.get(
    `http://${localIpServer}/salud-backend/get_functions/get_tipo_paciente.php`
  );
  console.log("Todos los tipos de paciente: ", req.data);
  return req.data;
};

export const GetHistorialConsultas = async (id) => {

  let localIpServer = await SecureStore.getItemAsync("ipLocal");
  let req = await axios.post(
    `http://${localIpServer}/salud-backend/get_functions/get_historial_consulta.php`,
    {
      idPaciente: id,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  console.log("Historial consultas: ", req.data);

  return req.data;
};

export const GetHistorialLaboratorio = async (id) => {

    let localIpServer = await SecureStore.getItemAsync("ipLocal");
    let req = await axios.post(
      `http://${localIpServer}/salud-backend/get_functions/get_historial_laboratorio.php`,
      {
        idPaciente: id,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  
    console.log("Historial lab: ", req.data);
  
    return req.data;
  };

  export const GetHistorialRehabilitacion = async (id) => {

    let localIpServer = await SecureStore.getItemAsync("ipLocal");
    let req = await axios.post(
      `http://${localIpServer}/salud-backend/get_functions/get_historial_rehabilitacion.php`,
      {
        idPaciente: id,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  
    console.log("Historial rehabilitacion: ", req.data);
  
    return req.data;
  };

  export const GetHistorialCita = async (id) => {

    let localIpServer = await SecureStore.getItemAsync("ipLocal");
    let req = await axios.post(
      `http://${localIpServer}/salud-backend/get_functions/get_historial_cita.php`,
      {
        idPaciente: id,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  
    console.log("Historial cita: ", req.data);
  
    return req.data;
  };

  export const GetHistorialVacunacion = async (id) => {

    let localIpServer = await SecureStore.getItemAsync("ipLocal");
    let req = await axios.post(
      `http://${localIpServer}/salud-backend/get_functions/get_historial_vacunacion.php`,
      {
        idPaciente: id,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  
    console.log("Historial vacunacion: ", req.data);
  
    return req.data;
  };

  export const GetVentasFarmacia = async () => {
    let localIpServer = await SecureStore.getItemAsync("ipLocal");
    let req = await axios.get(
      `http://${localIpServer}/salud-backend/get_functions/get_ventas_farmacia.php`
    );
    console.log("Ventas de la farmacia: ", req.data);
    return req.data;
  };
