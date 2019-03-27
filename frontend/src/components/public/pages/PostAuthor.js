import React from 'react';
import propTypes from 'prop-types';

const PostAuthor =({
    image, name, description,
    instagram_link, youtube_link, google_link, 
    twitter_link, facebook_link
}) => {
    return(
    <div className="about-author">								
        <i><img src={ image } alt="Author" /></i>
        <h3>{ name }</h3>
        <p>{ description }</p>
        <ul>
            <li><a href={instagram_link} title="Instagram"><i className="fa fa-instagram"></i></a></li>
            <li><a href={youtube_link} title="Youtube"><i className="fa fa-youtube"></i></a></li>
            <li><a href={google_link} title="Google Plus"><i className="fa fa-google-plus"></i></a></li>
            <li><a href={twitter_link} title="Twitter"><i className="fa fa-twitter"></i></a></li>
            <li><a href={facebook_link} title="Facebook"><i className="fa fa-facebook"></i></a></li>
        </ul>
    </div>
    )
}

PostAuthor.propTypes ={
    image: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    instagram_link: propTypes.string.isRequired,
    youtube_link: propTypes.string.isRequired,
    google_link: propTypes.string.isRequired,
    twitter_link: propTypes.string.isRequired,
    facebook_link: propTypes.string.isRequired,
}

export default PostAuthor;