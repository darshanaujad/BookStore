import axios from "axios";

const axiosInstance = axios.create({
    baseURL: API_URL || "http://localhost:5000/api",
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    },
    withCredentials: true
});


export default axiosInstance;
