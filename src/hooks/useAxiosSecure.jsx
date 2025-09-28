import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: 'https://blog-website-server-r74c.onrender.com',
    withCredentials: true
})

const useAxiosSecure = () => {

    const { logoutUser } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response
        }, error => {

            if (error.status === 401 || error.status === 403) {
                console.log('need to logout the user')
                logoutUser()
                .then(() =>{
                    console.log('logged out user')
                    navigate('/login')
                })
                .catch(error => console.log(error))
            }
            return Promise.reject(error);
        });
    }, [])

    return axiosInstance
};

export default useAxiosSecure;