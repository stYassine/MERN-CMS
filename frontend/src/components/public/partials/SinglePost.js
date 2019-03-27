import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component{
    render(){
        return(
            <div className="type-post post-box survival">
                <div className="entry-cover">
                    <Link to="/single"><img src="assets/images/home-1-blog-1.jpg" alt="Blog" /></Link>
                    <div className="tags">
                        <Link to="/single" title="Nature">Nature</Link>
                    </div>
                    <span><Link to="/single" title="View Post">View Post <i className="fa fa-long-arrow-right"></i></Link></span>
                </div>
                <div className="entry-content">
                    <h3 className="entry-title"><Link to="/single">{this.props.post.title}</Link></h3>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system...</p>
                    <div className="entry-footer">
                        <div className="entry-meta">
                            <span className="byline">By <a title="INDESIGN">INDESIGN</a></span>
                            <span className="post-comment"><a>6 COMMENTS</a></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts;