import React, { Component } from 'react';
import { connect } from 'react-redux';
import { create_user } from '../../../store/admin/actions/users';
import TextInput from '../common/TextInput';


class CreateUser extends Component{
    constructor(){
        super();

        this.state ={
            username: '',
            email: '',
            password: ''
        }

    }

    on_submit(e){
        e.preventDefault();
        this.props.create_user(this.state);
    }

    on_change(e){
        this.setState({ [e.target.name]: e.target.value });
    }


    render(){
        const {username, email, password} =this.state;

        return(
            <div className="col-lg-12 col-md-12">
            <div className="card">
                <div className="card-header card-header-success">
                <h4 className="card-title">Create Users</h4>
                </div>
                <div className="card-body table-responsive">
                
                    <form onSubmit={this.on_submit.bind(this)}>

                        <TextInput 
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={username}
                            on_change={this.on_change.bind(this)}
                        />

                        <TextInput 
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            value={email}
                            on_change={this.on_change.bind(this)}
                        />

                        <TextInput 
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            on_change={this.on_change.bind(this)}
                        />

                        <button type="submit" className="btn btn-success">Create</button>

                    </form>

                </div>
            </div>
        </div>
        )
    }

}

export default connect(null, { create_user })(CreateUser);