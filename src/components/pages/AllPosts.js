import React, { Component } from 'react';
import firebase from '../../firebase';
import Actions from '../pages/Actions';

//display data from firebase
//let user interact with it
// - edit
// - delete

export class AllPosts extends Component {
    constructor() {
        // adding data from firebase to state
        super();
        this.state = {
            allPosts: [],
        }
    }

    componentDidMount() {
        //set up listener to firebase database
        const dbRef = firebase.database().ref();
        dbRef.on('value', (result) => {

            let data = result.val();
            let posts = [];

            for (let i in data) {
                posts.push({
                    postId: i,
                    title: data[i].title,
                    writer: data[i].writer,
                    postscript: data[i].postscript
                });

                this.setState({
                    allPosts: posts
                });
            }
        })
    }

    componentWillUnmount(){
        const dbRef = firebase.database().ref();
        dbRef.off()
    }

    
    render() {
        return (
            <div>
                {this.state.allPosts.map((post) => {
                    return (
                        <div className="post">
                            <p><strong>{post.title}</strong> by <strong>{post.writer}</strong></p>
                            <p>{post.postscript}</p>
                            <Actions post={post}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default AllPosts
