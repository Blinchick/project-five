import React, { Component } from 'react';
import firebase from '../../firebase';

//display form on a page for user to fill in
//save new postscript into state
//display newly added postscript in your "my postscripts page"
//hook it up with firebase

//bonus - add a preview???

export class AddBook extends Component {
    constructor(){
        super();
        this.state = {
            title: "",
            writer: "",
            publisher: "",
            genre: ""
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
            publisher: this.state.publisher,
            genre: this.state.genre
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
            <React.Fragment>
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

                        <input type="Submit"/>
                    </form>
            </React.Fragment>
        )
    }
}

export default AddBook