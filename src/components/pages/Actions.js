import React from 'react';
import firebase from '../../firebase';

function Actions(props) {

    const deletePost = (e) => {
        e.preventDefault();
        const itemRef = firebase.database().ref(props.post.postId);
        itemRef.remove();
    }

    return (
        <React.Fragment>
            <button onClick={deletePost}>X</button>
        </React.Fragment>
    )
}

export default Actions;
