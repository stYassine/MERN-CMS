import React, { Component } from 'react';

class CreateCommentForm extends Component{
    constructor(){
        super();
        this.state ={
            name: '',
            email: '',
            website: '',
            comment: '',
        }
    }

    on_change(e){
        this.setState({[e.target.name]: e.target.value})
    }

    on_submit(e){
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        const { name, email, website, comment } =this.state;
        return(
            <div id="respond" className="comment-respond">
                <h2 className="comment-reply-title">Leave a Comment</h2>

                <form onSubmit={this.on_submit.bind(this)} id="commentform" className="comment-form">
                    
                    <p className="comment-form-author">
                        <input 
                            id="author" name="name" placeholder="Name" 
                            size="30" maxLength="245" required="required" 
                            type="text"
                            value={name}
                            onChange={this.on_change.bind(this)}
                            />
                    </p>
                    
                    <p className="comment-form-email">
                        <input id="email" name="email" placeholder="Email" 
                            required="required" type="email" 
                            value={email}
                            onChange={this.on_change.bind(this)}
                        />
                    </p>
                    
                    <p className="comment-form-url">
                        <input 
                            id="url" name="website" placeholder="Website" 
                            value={website}
                            onChange={this.on_change.bind(this)}
                        />
                    </p>

                    <p className="comment-form-comment">
                        <textarea id="comment" name="comment" 
                            placeholder="Enter your comment here..." rows="8" required="required"
                            value={comment}
                            onChange={this.on_change.bind(this)}
                            ></textarea>
                    </p>

                    <p className="form-submit">
                        <input name="submit" className="submit" value="Post Comment" type="submit"/>
                    </p>

                </form>

            </div>
        )
    }

}

export default CreateCommentForm