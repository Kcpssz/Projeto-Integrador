
import axios from 'axios';

const API_URL = 'http://localhost:8080/DadosPessoais'; // ajuste conforme necessário

export const createDadosPessoaisServices = async (dadospessoaisData) => {
    try {
        //const response = await axios.post(API_URL, anamneseData);
        return console.log(dadospessoaisData);
    } catch (error) {
        // Trate o erro conforme necessário
        console.error('Erro ao criar dados pessoais', error);
        throw error;
    }
};

export const getDadosPessoaisService = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data; // Retorna os dados pessoais encontrados
    } catch (error) {
        console.error('Erro ao buscar dados pessoais', error);
        throw error;
    }
};

export const updateDadosPessoaisService = async (id, newData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, newData);
        return response.data; // Retorna os dados pessoais atualizados
    } catch (error) {
        console.error('Erro ao atualizar dados pessoais', error);
        throw error;
    }
};

export const deleteDadosPessoaisService = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data; // Retorna os dados pessoais deletados
    } catch (error) {
        console.error('Erro ao deletar dados pessoais', error);
        throw error;
    }
};




// Adicione métodos para buscar, atualizar e deletar

