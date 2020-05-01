import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h2>Here is all the links</h2>
            <Link to="">Home </Link> 
            | 
            <Link to="/allposts"> My Postsripts</Link>
            |
            <Link to="/addbook"> Add New Book </Link>
        </header>
    )
}
