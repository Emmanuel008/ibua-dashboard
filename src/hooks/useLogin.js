import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from 'axios'
import {url} from '../utils/API'

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch: authDispatch } = useAuthContext();

    const login = async (username, password) => {
        console.log(username, password)
        setIsLoading(true);
        setError(null);
        try {
            await axios.post(
                `${url}users/login`,
                { username, password }
            ).then((res) => {
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        user: res.data
                    })
                );
                authDispatch({
                    type: "LOGIN",
                    payload: { user: res.data },
                });
                setIsLoading(false);
                window.location = "/dashboard";
            })
        } catch (error) {
            setIsLoading(false)
            setError(error.response.data);
        }



    }
    return { login, isLoading, error, setError }
}