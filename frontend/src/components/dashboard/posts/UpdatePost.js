import React, { Component } from 'react';
import { connect } from 'react-redux';
import { update_post } from '../../../store/admin/actions/posts';
import TextInput from '../common/TextInput';
import TextAreaField from '../common/TextAreaField';


class UpdatePost extends Component{
    constructor(){
        super();
        
        this.state ={
            title: '',
            description: ''
        };

        setInterval(() => {
            console.log(this.props.selected_post);
        }, 1000);

    }


    on_change(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    on_submit(e){
        e.preventDefault();
        
        
    }

    render(){
        const { title, description } =this.state;
        return(
            <div className="col-lg-12 col-md-12">
            <div className="card">
                <div className="card-header card-header-success">
                <h4 className="card-title">Create Post</h4>
                </div>
                <div className="card-body table-responsive">

                    <form onSubmit={this.on_submit.bind(this)}>

                    <TextInput 
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={title}
                        on_change={this.on_change.bind(this)}
                    />

                    <TextAreaField 
                        placeholder="Description"
                        name="description"
                        value={description}
                        on_change={this.on_change.bind(this)}
                    />

                    <button type="submit" className="btn btn-success">Update</button>

                    </form>

                </div>
            </div>
            </div>
        )
    }

}

const mapStateToProps =(state) => ({
    selected_post: state.admin_posts
});

export default connect({ mapStateToProps }, { update_post })(UpdatePost);