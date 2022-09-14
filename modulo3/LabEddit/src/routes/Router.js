import React from "react"

// router
import { BrowserRouter, Route, Routes } from "react-router-dom"

// pages
import LoginPage from "../pages/LoginPage"
import SignUpPage from "../pages/SignUpPage"
import FeedPage from "../pages/FeedPage"
import PostPage from "../pages/PostPage"
import ErrorPage from "../pages/ErrorPage"

// components
import Header from "../components/Header"

const Router = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" exact element={<LoginPage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/feed" element={<FeedPage />} />
                <Route path="/post/:id" element={<PostPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;