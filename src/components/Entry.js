import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login/Login"
import Main from "./Main";

const Entry = () => {
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Main />} />
            </Routes>
        </BrowserRouter>
    </div>
}

export default Entry