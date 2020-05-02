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
                        <section>
                            <p>{post.title} by {post.writer}</p>
                            <p>{post.postscript}</p>
                                <Actions post={post}/>
                        </section>
                    )
                })}
            </div>
        )
    }
}


export default AllPosts
