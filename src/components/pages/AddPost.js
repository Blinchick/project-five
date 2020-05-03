import React, { Component } from 'react';
import firebase from '../../firebase';

//display form on a page for user to fill in
//save new postscript into state
//display newly added postscript in your "my postscripts page"
//hook it up with firebase

//bonus - add a preview???
//bonus - add api w bookcovers and all those shits

export class AddPost extends Component {
    constructor(){
        super();
        this.state = {
            title: "",
            writer: "",
            postscript: ""
        };
        //making 'this' to work in the callback
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //state updates when user making changes
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //on submit we are saving our form to firebase
    handleSubmit(e){
        e.preventDefault();
        console.log(e);
        const newPost = firebase.database().ref();

        //adding to firebase
        newPost.push({
            title: this.state.title,
            writer: this.state.writer,
            postscript: this.state.postscript
        });

        //clearing input
        this.setState({
            title: "",
            writer: "",
            postscript:""
        })
        
    }

    render() {
        return (
            <section className="wrapper addPost">
                <h2>Leave your PostScript</h2>
                    <form action="" onSubmit={this.handleSubmit}>
                        <label htmlFor="title">Title</label>
                        <input
                            id = "title"
                            type = "text" 
                            name = "title"
                            onChange = {this.handleChange}
                            value={this.state.title}
                            required
                        />

                        <label htmlFor="writer">Writer</label>
                        <input 
                            type="text"
                            name="writer"
                            onChange={this.handleChange}
                            value={this.state.writer}
                            required
                        />

                        <label htmlFor="postscript">Your Postscript</label>
                        <textarea
                            name="postscript"
                            cols="50"
                            rows="20"
                            onChange={this.handleChange}
                            value={this.state.postscript}
                            required
                        >
                        </textarea>

                        <button type="submit">Submit</button>
                    </form>
            </section>
        )
    }
}

export default AddPost