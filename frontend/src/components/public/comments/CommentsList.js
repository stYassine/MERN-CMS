import React from 'react';
import SingleComment from './SingleComment';

const CommentsList = () => {
    return(
        <ol className="comment-list">
            <SingleComment />
        </ol>
    )
}

export default CommentsList;