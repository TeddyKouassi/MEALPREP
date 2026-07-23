import axios from "axios";

const API_URL = "http://localhost:5001/api/auth";

export const Connexion = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data;
};
    
export const Inscription = async (userData) => {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
};
