import React, { Component } from 'react';
import { connect } from 'react-redux';
import { create_comment } from '../../../store/admin/actions/comments';
import TextAreaField from '../common/TextAreaField';
import SelectGroup from '../common/SelectGroup';

class CreateComment extends Component{
    constructor(){
        super();

        this.state ={
            user_id: '',
            post_id: '',
            comment: ''
        }
    }

    on_change(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    on_submit(e){
        e.preventDefault();
        this.props.create_comment(this.state);
    }

    render(){
        return(
            <div className="col-lg-12 col-md-12">
            <div className="card">
                <div className="card-header card-header-info">
                <h4 className="card-title">Create Comment</h4>
                </div>
                <div className="card-body table-responsive">
                
                    <form onSubmit={this.on_submit.bind(this)}>

                        <div className="form-group">
                            <select className="form-control" 
                                name="user"
                                onChange={this.on_change.bind(this)}
                                >
                                <option selected disabled hidden>User</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select className="form-control" 
                                name="user"
                                onChange={this.on_change.bind(this)}
                                >
                                <option selected disabled hidden>User</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <textarea className="form-control"></textarea>
                        </div>

                    </form>

                </div>
            </div>
        </div>
        )
    }

}

export default connect(null, { create_comment })(CreateComment);