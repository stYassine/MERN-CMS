import React, { Component } from 'react';
import { connect } from 'react-redux';
import { load_posts, select_post } from '../../../store/admin/actions/posts';


class PostsList extends Component{
    constructor(){
        super();
        
    }

    componentWillMount(){
        this.props.load_posts();
    }

    componentDidMount(){
        console.log(this.props);
    }

    redirect_to_edit(post){
        ///console.log(post_id);
        this.props.select_post(post);
        this.props.history.push('/admin/posts/update');
    }

    render(){
        const { posts } =this.props;

        return(
            <div className="col-lg-12 col-md-12">
            <div className="card">
                <div className="card-header card-header-warning">
                <h4 className="card-title">Posts</h4>
                </div>
                <div className="card-body table-responsive">
                <table className="table table-hover">
                    <thead className="text-warning">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    { 
                        this.props.posts.map((post) => (
                            <tr key={post._id}>
                                <td>{ post._id }</td>
                                <td>{ post.title }</td>
                                <td><button type="button" onClick={() => this.redirect_to_edit(post) } className="btn btn-info btn-sm">Edit</button></td>
                                <td><button className="btn btn-danger btn-sm">remove</button></td>
                            </tr>
                        ))
                    }                
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        )
    }

}

const mapStateToProps =(state) => ({
    posts: state.admin_posts.posts
});

export default connect(mapStateToProps, { load_posts, select_post })(PostsList);