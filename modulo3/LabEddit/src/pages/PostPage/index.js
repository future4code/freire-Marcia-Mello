/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import PostCard from '../../components/postCard';
import { useProtectedPage } from '../../routes/coordinator'
import { getComments } from '../../services/post';
import PostForm from './form';
import { ScreenContainer } from './styled';

const PostPage = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([])

  const navigate = useNavigate()

  useProtectedPage(navigate)
  
  const handleGetPost = () => {
    const savedPost = JSON.parse(window.localStorage.getItem('post'))

    setPost(savedPost);
  }

  const handleGetComments = async () => {
      const comments = await getComments(post.id);
      setComments(comments)
  }

  useEffect(() => {
    handleGetPost()
    if(post.id){
      handleGetComments()
    }
  }, [post.id])

  const handleCheckPost = () => {
    const transformPost = Object.keys(post) || {};
    if(transformPost.length === 0) return
  }

  const handleRenderPost = () => {
    handleCheckPost();

    return <PostCard post={post}/>
  }

  const orderedVote = comments && comments.sort((a, b) => {
    if (a.voteSum < b.voteSum) {
      return 1;
    } else {
      return -1;
    }
  })

  const handleRenderComments = () => {
    return orderedVote && orderedVote.map((comment, index) => {
      return <PostCard key={index} post={comment} isAComment getData={() => handleGetComments()} commentId={comment.id}/>
    })
  }

  return (
    <ScreenContainer>
      {handleRenderPost()}
      <PostForm getComments={handleGetComments} id={post.id}/>
      {handleRenderComments()}
    </ScreenContainer>
  )
}

export default PostPage;