
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react"


const HandleQuery = () => {

    const navigate = useNavigate();
    useEffect(() => {
        // const params = new URLSearchParams(window.location.search)
        const queryParams = new URLSearchParams(window.location.search)
        if(queryParams.has('email') && queryParams.has('token')){
            navigate("/changePassword",{state:{email:queryParams.get('email'), token:queryParams.get('token')}});
        }
    }, [])


    return (null)
}

export default HandleQuery