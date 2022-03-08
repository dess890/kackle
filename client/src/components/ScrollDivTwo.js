import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import FbPosts from './FbPosts';
import "./ScrollDiv.css";

function ScrollDivTwo() {
    return (
        <div className="scroll">
            <BsFacebook />
            <FbPosts />
        </div>
    )
}

export default ScrollDivTwo