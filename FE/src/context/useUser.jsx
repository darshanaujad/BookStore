import axios from 'axios'
import { useState, useEffect, createContext, useContext } from 'react'
const API_URL = import.meta.env.VITE_API_URL

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`${API_URL}/auth/me`, { headers: { Authorization: `Bearar ${localStorage.getItem('token')}` } });
                if (res.status === 200) {
                    setUser(res.data.user)
                }
            } catch (error) {
                console.error("Error in context", error);
                localStorage.removeItem('token');
                setUser(null);
            }
        }
    }, [])
}


