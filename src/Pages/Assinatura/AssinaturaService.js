import axios from 'axios';

const API_URL = 'http://localhost:8080/Assinatura'; // ajuste conforme necessário

export const createAssinaturaServices = async (assinaturaData) => {
    try {
        //const response = await axios.post(API_URL, anamneseData);
        return console.log(assinaturaData);
    } catch (error) {
        // Trate o erro conforme necessário
        console.error('Erro ao criar assinatura', error);
        throw error;
    }
};

export const getAssinaturaService = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data; 
    } catch (error) {
        console.error('Erro ao buscar assinatura', error);
        throw error;
    }
};

export const updateAssinaturaService = async (id, newData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, newData);
        return response.data; 
    } catch (error) {
        console.error('Erro ao atualizar assinatura', error);
        throw error;
    }
};

export const deleteDadosPessoaisService = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data; 
    } catch (error) {
        console.error('Erro ao deletar assinatura', error);
        throw error;
    }
};

