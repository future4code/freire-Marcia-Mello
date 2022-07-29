import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useProtectedPage } from '../../routes/coordinator'

const PostPage = () => {

  const navigate = useNavigate()

  useProtectedPage(navigate)
  
  return (
    <div>PostPage</div>
  )
}

export default PostPage;