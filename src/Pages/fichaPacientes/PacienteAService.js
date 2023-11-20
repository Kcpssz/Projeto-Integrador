
import axios from 'axios';

const API_URL = 'http://localhost:8080/PacienteA'; // ajuste conforme necessário

export const creatPacienteAServices = async (pacienteAData) => {
    try {
        //const response = await axios.post(API_URL, anamneseData);
        return console.log(pacienteAData);
    } catch (error) {
        // Trate o erro conforme necessário
        console.error('Erro ao criar paciente', error);
        throw error;
    }
};

export const getPacienteAService = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data; 
    } catch (error) {
        console.error('Erro ao buscar paciente', error);
        throw error;
    }
};

export const updatePacienteAService = async (id, newData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, newData);
        return response.data; 
    } catch (error) {
        console.error('Erro ao atualizar paciente', error);
        throw error;
    }
};

export const deletePacienteAService = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data; 
    } catch (error) {
        console.error('Erro ao deletar paciente', error);
        throw error;
    }
};
