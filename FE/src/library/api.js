import axiosInstance from "./axiosInstance";
import toast from 'react-hot-toast'

export const login = async (data , navigate)=>{
      try {
            const { email, password } = data;
            const res = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            });
            if (res.status === 200) {
                toast.success("Login Successful");
                localStorage.setItem('token', res.data.token);
                navigate('/');
            }
        } catch (error) {
            console.log('Login error ', error)
        }
    
}
export const signUp  = async(data , navigate) =>{
     try {
            const { name, username, email, password } = data;
            const res = await axios.post('http://localhost:5000/api/auth/signup', {
                fullName: name,
                email,
                userName: username,
                password

            });
            if (res.status === 200) {
                toast.success("Registration successfully");
                setActiveTab('login');
            }

        } catch (error) {

        }
}