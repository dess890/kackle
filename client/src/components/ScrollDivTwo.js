import { Button } from '@chakra-ui/react';
import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import FbPosts from './FbPosts';
import "./ScrollDiv.css";

function ScrollDivTwo() { 
    const userRedux = useSelector(state => state.user.user)
    const host = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''

    if(userRedux !== null && userRedux.facebookId !== null) {
        return (
            <div className="scroll">
                <BsFacebook />
                <FbPosts />
            </div>
        )
    }
    return (
        <div className="scroll">
            <Button as='a' href={host + '/auth/facebook'} colorScheme='facebook' style={{margin: "auto"}}>
                    Login with Facebook.
                </Button>
        </div>
    )
}

export default ScrollDivTwo