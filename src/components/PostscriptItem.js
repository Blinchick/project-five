import React, { Component } from 'react';

class PostscriptItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.post}</p>
            </div>
        )
    }
}

export default PostscriptItem
