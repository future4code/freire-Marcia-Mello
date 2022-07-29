import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PostCard from '../../components/postCard'
import { useProtectedPage } from '../../routes/coordinator'
import { getPosts } from '../../services/post'
import FeedForm from './form'
import { ScreenContainer } from './styled'

const FeedPage = () => {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate()

  useProtectedPage(navigate)

  useEffect(() => {
    handleGetPosts()
  },[])

  const handleGetPosts = async () => {
    const response = await getPosts()
    setPosts(response)
  }

  const handleRenderPosts = () => {
    return posts && posts.map((post) => {
      return <PostCard post={post} key={post.id} comment={() => handleSavePost(post)}/>
    })
  }

  const handleSavePost = (post) => {
    window.localStorage.setItem("post", JSON.stringify(post))
  }

  return (
    <ScreenContainer>
      <FeedForm getPosts={handleGetPosts()}/>
      {handleRenderPosts()}
    </ScreenContainer>
  )
}

export default FeedPage;