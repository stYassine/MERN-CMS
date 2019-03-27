import React, { Component } from 'react';
import TextInput from '../common/TextInput';
import TextAreaField from '../common/TextAreaField';
import { connect } from 'react-redux';
import { create_post } from '../../../store/admin/actions/posts';


class CreatePost extends Component{
    constructor(){
        super();
        
        this.state ={
            title: '',
            // image: '',
            description: ''
        };

    }

    on_change(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    on_submit(e){
        e.preventDefault();
        
        this.props.create_post(this.state);
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

                    {/* <TextInput 
                        type="file"
                        placeholder="Image"
                        name="image"
                        value={image}
                        on_change={this.on_change.bind(this)}
                    /> */}

                    <TextAreaField 
                        placeholder="Description"
                        name="description"
                        value={description}
                        on_change={this.on_change.bind(this)}
                    />

                    <button type="submit" className="btn btn-success">Submit</button>

                    </form>

                </div>
            </div>
            </div>
        )
    }

}



export default connect(null, { create_post })(CreatePost);