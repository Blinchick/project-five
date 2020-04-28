import React, { Component } from 'react';
import PostscriptItem from './PostscriptItem';

class Postscripts extends Component {
    render() {
        return this.props.postscript.map((post) => (
            <PostscriptItem post={post} />
        ));
    }
}

export default Postscripts;
