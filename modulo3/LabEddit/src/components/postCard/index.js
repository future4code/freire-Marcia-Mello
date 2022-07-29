import React from 'react'
import { PostCardContainer } from './styles';
import CommentIcon from '../../assets/icons/comment.svg';
import UpIcon from '../../assets/icons/up.svg';
import DownIcon from '../../assets/icons/down.svg';
import { goToPost } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post, comment }) => {

    const navigate = useNavigate()

    const handleGoToDetails = () => {
        comment()
        goToPost(navigate, post.id)
    }

    return (
        <PostCardContainer>
            <h4>Enviado por: {post.username}</h4>
            <p>{post.body}</p>
            <section>
                <button>
                    <img src={UpIcon} alt="vote" />
                    {post.voteSum === null ? "0" : post.voteSum}
                    <img src={DownIcon} alt="vunote" />  </button>
                <button onClick={() => handleGoToDetails()}><img src={CommentIcon} alt="comment"/>{post.commentCount === null ? "0" : post.commentCount }</button>
            </section>
        </PostCardContainer>
    )
}

export default PostCard;