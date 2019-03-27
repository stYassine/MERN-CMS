import React, { Component } from 'react';
import { connect } from 'react-redux';
import { load_users, select_user } from '../../../store/admin/actions/users';


class UsersList extends Component{
    constructor(){
        super();
    }

    componentWillMount(){
        this.props.load_users();
    }

    go_to_update(user){
        this.props.select_user(user);
        this.props.history.push(`/admin/users/update/${user._id}`);
    }

    render(){
        const { users } =this.props.users;
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
                            users.map((user) => (
                                <tr key={user._id}>
                                    <td>{ user._id }</td>
                                    <td>{ user.username }</td>
                                    <td><button onClick={() => this.go_to_update(user)} className="btn btn-info btn-sm">Edit</button></td>
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
    users: state.admin_users
});

export default connect(mapStateToProps, { load_users, select_user })(UsersList);