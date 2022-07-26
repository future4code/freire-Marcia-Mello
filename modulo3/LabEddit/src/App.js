import React from "react"
import LoginPage from "./pages/LoginPage/LoginPage"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import FeedPage from "./pages/FeedPage/FeedPage"
import PostPage from "./pages/PostPage/PostPage"


const App = () => {
  return (
    <div>
      <LoginPage />
      <SignUpPage />
      <FeedPage />
      <PostPage />
    </div>
  )
}

export default App
