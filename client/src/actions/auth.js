import { toast } from 'react-toastify';
import axios from "axios";
const API_URL = "http://localhost:8080/api/auth";


export const register = (data) => (dispatch) =>{
    axios.post(`${API_URL}/register`, data)
    
        .then(e => {
            if(e.data.message){
                const data = JSON.stringify(e.data)
                localStorage.setItem('register', data)

                dispatch({
                    type: 'REGISTER_SUCCESS',
                    payload: data
                })
                toast.success(e.data.message)
            }
        }) .catch((error) => {
            dispatch({
                type: 'REGISTER_FAIL',
            })
            toast.warning(error.response.data.message)
        })
    
    }

    export const login = (data) => (dispatch) => {

        axios.post(`${API_URL}/login`, data)
        .then(e => {
            if(e.data.message) {
                const data = JSON.stringify(e.data)
                localStorage.setItem('login', data)
    
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: data
                })
                toast.success(e.data.message)
            }
        }).catch((error) => {
            dispatch({
                type: 'LOGIN_FAIL'
            })
            toast.warning(error.response.data.message)
        })
    }
