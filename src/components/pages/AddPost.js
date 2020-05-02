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

        //clearing state
        this.setState({
            title: "",
            writer: "",
            publisher: "",
            genre: ""
        })
        
    }

    render() {
        return (
            <section>
                <h2>Here you can create PostScript</h2>
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

                    <textarea
                        name="postscript"
                        cols="30"
                        rows="5"
                        onChange={this.handleChange}
                        value={this.state.postscript}
                    >
                    </textarea>

                        <input type="Submit"/>
                    </form>
            </section>
        )
    }
}

export default AddPost