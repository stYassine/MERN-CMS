import React, { Component } from 'react';
import PostAuthor from './PostAuthor';
import Comments from '../comments/Comments';


class SinglePostPage extends Component{
    render(){
        return(
            <div>
            <article className="type-post">
                <div className="entry-cover">
                    <img src="assets/images/post-sidebar-1.jpg" alt="Blog" />
                    <div className="tags">
                        <a href="#" title="Nature">Nature</a>
                    </div>
                </div>
                <div className="entry-content">
                    <h3 className="entry-title">Wild River Big Adventure</h3>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking.</p>
                    <blockquote>
                        <p><i>“ </i> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, aliquam quaerat voluptatem. Eque porro quisquam est, qui dolorem ipsum quia dolor sit amet?</p>
                    </blockquote>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
                    <h3>Adventure Day</h3>
                    <p>So blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                    <div className="img-block">
                        <div className="col-xs-12">
                            <img src="assets/images/post-image-3.jpg" alt="Post" />
                            <span>Lake picture</span>
                        </div>
                    </div>
                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise.</p>
                    <ul>
                        <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</li>
                        <li>Voluptas sit aspernatur aut odit aut fugit.</li>
                        <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</li>
                    </ul>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know.</p>
                    <div className="entry-footer">
                        <div className="entry-meta">
                            <span className="byline">By <a href="#" title="INDESIGN">INDESIGN</a></span>
                            <span className="post-date"><a href="#">JANUARY 19, 2017</a></span>
                        </div>
                        <div className="post-social">
                            <ul>
                                <li><a href="#" title="Instagram"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#" title="Youtube"><i className="fa fa-youtube"></i></a></li>
                                <li><a href="#" title="Google Plus"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- Type Post /- --> */}

            </article>

            <PostAuthor
                    name="John Doe"
                    description="Lorem Lipsum Dolor Imit"
                    image="assets/images/about-author.png"
                    instagram_link=""
                    youtube_link=""
                    google_link=""
                    twitter_link=""
                    facebook_link=""
                />

            <Comments />

            </div>
        )
    }
}

export default SinglePostPage;