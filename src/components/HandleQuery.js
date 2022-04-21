
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';


const HandleQuery = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
<<<<<<< Updated upstream
        console.log(searchParams.toString())
        if(searchParams.has('email') && searchParams.has('token')){
            var e = searchParams.get('email');
            var t = searchParams.get('token');
            navigate("/passwordChange",{state:{email:e, token:t}});
        }else{
            alert("Inavlid reset link!!");
=======
        // const params = new URLSearchParams(window.location.search)
        console.log("HELLO")
        const queryParams = new URLSearchParams(window.location.search)
        console.log(window.location.search)
        console.log(queryParams)
        if(queryParams.has('email') && queryParams.has('token')){
            navigate("/passwordChange",{state:{email:queryParams.get('email'), token:queryParams.get('token')}});
>>>>>>> Stashed changes
        }
    }, [])


    return (null)
}

export default HandleQuery