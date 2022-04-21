
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';


const HandleQuery = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        console.log(searchParams.toString())
        if(searchParams.has('email') && searchParams.has('token')){
            var e = searchParams.get('email');
            var t = searchParams.get('token');
            navigate("/passwordChange",{state:{email:e, token:t}});
        }else{
            alert("Inavlid reset link!!");
        }
    }, [])


    return (null)
}

export default HandleQuery