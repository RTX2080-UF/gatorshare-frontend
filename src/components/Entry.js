import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Onboarding from "../pages/Onboarding";
import Login from "./Login/Login"
import ForgotPassword from "./Login/ForgotPassword"
import ChangePassword from "./Login/ChangePassword"
import Signup from "./Signup/Signup"
import Home from "../pages/Home";
import Settings from "./Settings/Settings"
import PostDetails from "./Post/PostDetails";
import Search from "../pages/Search";
import Data from "../data/Data"
import { setUser } from "../utils/SessionUtils"
import Posts from "../pages/Posts";
import ForYouPosts from "../pages/ForYouPosts";
import HandleQuery from './HandleQuery'



const Entry = () => {

    // let [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        Data.getCurrentUser().then(user => {
            setUser(user)
        })
    }, [])

    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/forgotPwd" element={<ForgotPassword />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/changePassword" element={<ChangePassword />} />
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/post">
                    <Route path=":postId" element={<PostDetails />} />
                </Route>
                <Route path="/posts/search" element={<Search />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/forYou" element={<ForYouPosts />} />
                <Route path="*" element={<HandleQuery />} />
            </Routes>
        </BrowserRouter>
    </div>
}

export default Entry