import axiosInstance from '../library/axiosInstance'
import { useState, useEffect, createContext, useContext } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axiosInstance.get(`/auth/me`);
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


    return (<UserContext.Provider value={{ user }}>
        {children}
    </UserContext.Provider>)


}

const UseUser = () => {
    const context = useContext(UserContext);
    return context;


}

export { UserProvider, UseUser }; 
