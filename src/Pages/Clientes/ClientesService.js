
import axios from 'axios';

const API_URL = 'http://localhost:8080/Clientes'; // ajuste conforme necessário

export const creatClientesServices = async (clientesInfData) => {
    try {
        //const response = await axios.post(API_URL, anamneseData);
        return console.log(clientesInfData);
    } catch (error) {
        // Trate o erro conforme necessário
        console.error('Erro ao criar paciente', error);
        throw error;
    }
};

export const getClientesService = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data; 
    } catch (error) {
        console.error('Erro ao buscar cliente', error);
        throw error;
    }
};

export const updateClientesService = async (id, newData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, newData);
        return response.data; 
    } catch (error) {
        console.error('Erro ao atualizar cliente', error);
        throw error;
    }
};

export const deleteClientesService = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data; 
    } catch (error) {
        console.error('Erro ao deletar cliente', error);
        throw error;
    }
};
