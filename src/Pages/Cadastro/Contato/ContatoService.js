
import axios from 'axios';

const API_URL = 'http://localhost:8080/Contato'; // ajuste conforme necessário

export const createContatoServices = async (contatoData) => {
    try {
        //const response = await axios.post(API_URL, anamneseData);
        return console.log(contatoData);
    } catch (error) {
        // Trate o erro conforme necessário
        console.error('Erro ao criar contato', error);
        throw error;
    }
};

export const getDadosContatoService = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar contato', error);
        throw error;
    }
};

export const updateDadosContatoService = async (id, newData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, newData);
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar contato', error);
        throw error;
    }
};

export const deleteContatoService = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data; 
    } catch (error) {
        console.error('Erro ao deletar contato', error);
        throw error;
    }
};
