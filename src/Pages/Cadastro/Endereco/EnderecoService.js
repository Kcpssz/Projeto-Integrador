import axios from 'axios';

const API_URL = 'http://localhost:8080/Endereco'; // ajuste conforme necessário

export const createEnderecoServices = async (enderecoData) => {
    try {
        //const response = await axios.post(API_URL, anamneseData);
        return console.log(enderecoData);
    } catch (error) {
        // Trate o erro conforme necessário
        console.error('Erro ao criar endereço', error);
        throw error;
    }
};

export const getEnderecoService = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar endereço', error);
        throw error;
    }
};

export const updateEnderecoService = async (id, newData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, newData);
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar endereço', error);
        throw error;
    }
};

export const deleteEnderecoService = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data; 
    } catch (error) {
        console.error('Erro ao deletar endereço', error);
        throw error;
    }
};
