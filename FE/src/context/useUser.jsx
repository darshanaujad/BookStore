import axios from 'axios'
import { useState, useEffect, createContext, useContext } from 'react'
const API_URL = import.meta.env.VITE_API_URL

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUser = async ()=>{
            try {
                const res 
            } catch (error) {
                
            }
        }
    }, [])
}


