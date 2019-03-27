import React, { Component } from 'react';
import { connect } from 'react-redux';
import { load_posts } from '../../../store/public/actions/posts_actions';
import SinglePost from '../partials/SinglePost';

class Posts extends Component{

    constructor(){
        super();
        
    }

    componentWillMount(){
        this.props.load_posts();
    }

    componentDidMount(){
        console.log('HERE : ', this.props);
    }

    render(){
        const { posts } =this.props.posts;
        return(
            <div className="post-list">

                {/* {
                    posts.map((i, e) => (
                        <SinglePost post={e} key={i} />
                    ))
                } */}
                

            </div>
        )
    }
}

const mapStateToProps =(state) => ({
    posts: state.posts
});

export default connect(mapStateToProps, { load_posts })(Posts);