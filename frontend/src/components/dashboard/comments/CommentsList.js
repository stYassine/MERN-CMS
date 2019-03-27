import React, { Component } from 'react';
import { connect } from 'react-redux';
import { load_comments } from '../../../store/admin/actions/comments';


class CommentsList extends Component{
    constructor(){
        super();
    }


    componentDidMount(){
        this.props.load_comments();
    }

    render(){
        const { comments } =this.props.comments;
        return(
            <div className="col-lg-12 col-md-12">
            <div className="card">
                <div className="card-header card-header-warning">
                <h4 className="card-title">Users</h4>
                </div>
                <div className="card-body table-responsive">
                <table className="table table-hover">
                    <thead className="text-warning">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            comments.map((comment) => (
                                <tr key={comment._id}>
                                    <td>{ comment._id }</td>
                                    <td>{ comment.content }</td>
                                    <td><button onClick={() => this.go_to_update(comment)} className="btn btn-info btn-sm">Edit</button></td>
                                    <td><a href="" className="btn btn-danger btn-sm">Remove</a></td>
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
    comments: state.admin_comments
});

export default connect(mapStateToProps, { load_comments })(CommentsList);