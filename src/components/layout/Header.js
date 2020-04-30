import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h2>Here is all the links dummies can open</h2>
            <Link to="">Home </Link> 
            | 
            <Link to="/writepost"> New Postscript</Link>
        </header>
    )
}
