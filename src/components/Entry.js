import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login/Login"
import Main from "./Main";

const Entry = () => {
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Main />} />
            </Routes>
        </BrowserRouter>
    </div>
}

export default Entry