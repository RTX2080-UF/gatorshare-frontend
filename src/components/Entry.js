import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Onboarding from "../pages/Onboarding";
import Login from "./Login/Login"
import ForgotPassword from "./Login/ForgotPassword"
import Signup from "./Signup/Signup"
import Settings from "./Settings/Settings"
import Main from "./Main";
import PostDetails from "./Post/PostDetails";
import Search from "../pages/Search";

const Entry = () => {
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/forgotPwd" element={<ForgotPassword />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Main />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/post">
                    <Route path=":postId" element={<PostDetails />} />
                </Route>
                <Route path="/posts/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    </div>
}

export default Entry