import React from 'react';
import firebase from '../../firebase';

function Actions(props) {

    const deletePost = (e) => {
        e.preventDefault();
        const itemRef = firebase.database().ref(props.post.postId);
        itemRef.remove();
    }

    return (
        <div>
            <button onClick={deletePost}>DELETE</button>
        </div>
    )
}

export default Actions;
