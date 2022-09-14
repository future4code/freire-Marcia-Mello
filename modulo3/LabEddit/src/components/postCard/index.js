import React from 'react'
import { PostCardContainer } from './styles';
import CommentIcon from '../../assets/icons/comment.svg';
import UpIcon from '../../assets/icons/up.svg';
import DownIcon from '../../assets/icons/down.svg';
import { goToPost } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { unVotePost, votePost, voteComment, unVoteComment } from '../../services/post';

const PostCard = ({ post, comment, isAComment = false, getData, commentId }) => {

    const navigate = useNavigate()

    const handleGoToDetails = () => {
        comment()
        goToPost(navigate, post.id)
    }

    const handleVotePost = () => {
        votePost(getData, post.id)
    }

    const handleUnVotePost = () => {
        unVotePost(getData, post.id)
    }

    const handleVoteComment = () => {
        voteComment(getData, commentId)
    }

    const handleUnVoteComment = () => {
        unVoteComment(getData, commentId)
    }

    return (
        <PostCardContainer>
            <h4>Enviado por: {post.username}</h4>
            <p>{post.body}</p>
            <section>
                <button>
                    <img src={UpIcon} alt="vote" onClick={ !isAComment ? (getData && (() => handleVotePost())) : (getData && (() => handleVoteComment()))}/>
                    {post.voteSum === null ? "0" : post.voteSum}
                    <img src={DownIcon} alt="unvote" onClick={ !isAComment ? (getData && (() => handleUnVotePost())) : (getData && (() => handleUnVoteComment()))}/>
                </button>
                {!isAComment && <button onClick={comment && (() => handleGoToDetails())}><img src={CommentIcon} alt="comment" />{post.commentCount === null ? "0" : post.commentCount}</button>}
            </section>
        </PostCardContainer>
    )
}

export default PostCard;