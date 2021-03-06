import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className="wrapper">
                <div className="links">
                        <h1>Epilogue</h1>
                        <h2>Book Diary</h2>
                    <ul>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="/allposts">My Postsripts</Link></li>
                        <li><Link to="/addpost">Add Postscript</Link></li>
                    </ul>
                </div>
            <img src={require("../../assets/header1.jpg")} alt="Girl in pink hoodie reading a red book"/>
        </div>    
        </header>
    )
}
