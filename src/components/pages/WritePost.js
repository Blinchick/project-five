import React, { Component } from 'react';
import firebase from '../../firebase';

//display form on a page for user to fill in
//save new postscript into state
//display newly added postscript in your "my postscripts page"
//hook it up with firebase somehow
//bonus - add a preview???

export class WritePost extends Component {
    constructor(){
        super();
        this.state = {
            title: "",
            writer: "",
            publisher: "",
            genre: "",
            newPostscript: ""
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

        newPost.push({
            
        })
    }

    render() {
        return (
            <React.Fragment>
                <h2>Here you can create PostScript</h2>
                    <form action="">
                        <label htmlFor="title">Title</label>
                        <input 
                            type = "text" 
                            name = "title"
                            onChange = {this.handleChange}
                            value={this.state.title}
                        />

                        <label htmlFor="writer">Writer</label>
                        <input 
                            type="text"
                            name="writer"
                            onChange={this.handleChange}
                            value={this.state.writer}
                        />

                        <label htmlFor="publisher">Publisher</label>
                        <input
                            type="text"
                            name="publisher"
                            onChange={this.handleChange}
                            value={this.state.publisher}
                        />

                        <label htmlFor="genre">Genre</label>
                        <input 
                            type="text"
                            name="genre"
                            onChange={this.handleChange}
                            value={this.state.genre}
                        />

                        <label htmlFor="newPostscript">Your Postscript</label>
                        <textarea 
                            name="newPostscript" 
                            cols="50" 
                            rows="10"
                            onChange={this.handleChange}
                            value={this.state.newPostscript}
                        >
                        </textarea>

                        <input type="Submit" value="Create PostScript"/>
                    </form>
            </React.Fragment>
        )
    }
}

export default WritePost
