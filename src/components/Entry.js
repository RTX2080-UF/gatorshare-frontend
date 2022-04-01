import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Onboarding from "../pages/Onboarding";
import Login from "./Login/Login"
import Signup from "./Signup/Signup"
import Home from "../pages/Home";
import PostDetails from "./Post/PostDetails";
import Search from "../pages/Search";
import Data from "../data/Data"
import { setUser } from "../utils/SessionUtils"
import Posts from "../pages/Posts";

const Entry = () => {

    useEffect(() => {
        Data.getCurrentUser().then(user => {
            setUser(user)
        })
    }, [])

    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Home />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/post">
                    <Route path=":postId" element={<PostDetails />} />
                </Route>
                <Route path="/posts/search" element={<Search />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
        </BrowserRouter>
    </div>
}

export default Entry