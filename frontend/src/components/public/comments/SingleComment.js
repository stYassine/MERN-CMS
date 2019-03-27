import React from 'react';

const SingleComment = ({
    image, name, date_created, comment
}) => {
    return(
        <li className="comment byuser comment-author-admin bypostauthor even thread-even depth-1 parent">
            <div className="comment-body">
                <footer className="comment-meta">
                    <div className="comment-author vcard">
                        <img alt="img" src="assets/images/comment-1.png" className="avatar avatar-72 photo"/>
                        <b className="fn">Silvia Marten</b>
                    </div>
                    <div className="comment-metadata">
                        <a href="#">January 20, 2016 at 11:25 AM</a>										
                    </div>
                </footer>
                <div className="comment-content">
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                </div>
            </div>
        </li>
    )
}

export default SingleComment;