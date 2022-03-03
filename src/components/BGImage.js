import React from "react"
import Image from "react-bootstrap/Image"
import loginimg from "../assets/loginimg.jpeg"

const BGImage = () => {
    return <div>
        <Image className="fill-window" src={loginimg}/>
    </div>
}

export default BGImage