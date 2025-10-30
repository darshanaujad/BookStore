import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
    baseUrl: `${API_URL}`,
    withCredentials: true,
    headers: { authrization : `Bearar ${localStorage.getItem('token')}` }
});

export default axiosInstance 