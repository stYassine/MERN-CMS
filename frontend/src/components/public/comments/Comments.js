import React from 'react';
import CommentsList from './CommentsList';
import CreateCommentForm from './CreateCommentForm';


const Comments =({
    comments
}) => {
    return(
        <div id="comments" className="comments-area">
            <h2 className="comments-title">3 Comments</h2>

            <div className="comment-block">
                
                {/* <!-- comment-list --> */}
                <CommentsList />
                {/* <!-- END comment-list --> */}

            </div>

                {/* <!-- Comment Form --> */}
                <CreateCommentForm />
                {/* <!-- Comment Form /- --> */}


        </div>
    )
}

export default Comments;