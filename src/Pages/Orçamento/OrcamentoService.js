
import axios from 'axios';

const API_URL = 'http://localhost:8080/Orcamento'; // ajuste conforme necessário

export const creatPacienteInfServices = async (orcamentoInfData) => {
    try {
        //const response = await axios.post(API_URL, anamneseData);
        return console.log(orcamentoInfData);
    } catch (error) {
        // Trate o erro conforme necessário
        console.error('Erro ao criar orçamento', error);
        throw error;
    }
};

export const getPacienteInfService = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data; 
    } catch (error) {
        console.error('Erro ao buscar orçamento', error);
        throw error;
    }
};

export const updatePacienteInfService = async (id, newData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, newData);
        return response.data; 
    } catch (error) {
        console.error('Erro ao atualizar orçamento', error);
        throw error;
    }
};

export const deletePacienteInfService = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data; 
    } catch (error) {
        console.error('Erro ao deletar orçamento', error);
        throw error;
    }
};
