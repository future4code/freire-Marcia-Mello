/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PostCard from '../../components/postCard'
import useForm from '../../hooks/useForm'
import { useProtectedPage } from '../../routes/coordinator'
import { getPosts } from '../../services/post'
import { InputsContainer } from '../PostPage/styled'
import FeedForm from './form'
import { ScreenContainer, StyledButton } from './styled'
import { TextField } from '@material-ui/core';

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [form, onChange] = useForm({
    search: '',
  })

  const { search } = form;

  const [postsPerPage, setPostsPerPage] = useState(10)

  const navigate = useNavigate()

  useProtectedPage(navigate)

  useEffect(() => {
    handleGetPosts()
  }, [postsPerPage])

  const handleGetPosts = async () => {
    const response = await getPosts(postsPerPage)
    setPosts(response)
  }

  const handleSavePost = (post) => {
    window.localStorage.setItem("post", JSON.stringify(post))
  }

  const handleGetMorePosts = () => {
    setPostsPerPage(postsPerPage + 10);

    handleGetPosts()
  }

  const filteredPost = posts && posts.filter((post) => {
    return post.username.toLowerCase().indexOf(search.toLowerCase()) !== -1 || post.body.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  })

  const orderedPost = filteredPost && filteredPost.sort((a, b) => {
    if (a.voteSum < b.voteSum) {
      return 1;
    } else {
      return -1;
    }
  })


  const handleRenderPosts = () => {
    return orderedPost && orderedPost.map((post) => {
      return <PostCard post={post} key={post.id} comment={() => handleSavePost(post)} getData={() => handleGetPosts(post)} />
    })
  }

  return (
    <ScreenContainer>
      <FeedForm getPosts={handleGetPosts} />
      <InputsContainer>
        <TextField
          name="search"
          value={form.search}
          onChange={onChange}
          label="Buscar"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          type="text"
        />
      </InputsContainer>
      {handleRenderPosts()}
      { orderedPost.length >= 10 && <StyledButton onClick={() => handleGetMorePosts()}>Ver mais</StyledButton>}
    </ScreenContainer>
  )
}

export default FeedPage;