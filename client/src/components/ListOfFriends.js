
import React from 'react'
import img from '../img/kacklelogo.png'
import '../css/Friend.css'
import { Heading } from '@chakra-ui/react'

function ListOfFriends() {
    return (
        <div>
            <Heading style={{ width: '300px' }}>Friends' List</Heading>
            <ul id='friend-list'>
                <li class='friend'>
                    <img src={img} />
                    <div class='name'>
                        Friend One
                    </div>
                </li>
                <li class='friend'>
                    <img src={img} />
                    <div class='name'>
                        Friend Two
                    </div>
                </li>
                <li class='friend'>
                    <img src={img} />
                    <div class='name'>
                        Friend Three
                    </div>
                </li>
                <li class='friend'>
                    <img src={img} />
                    <div class='name'>
                        Friend Four
                    </div>
                </li>
                <li class='friend'>
                    <img src={img} />
                    <div class='name'>
                        Friend Five
                    </div>
                </li>
                <li class='friend'>
                    <img src={img} />
                    <div class='name'>
                        Friend Six
                    </div>
                </li>
            </ul>
        </div >
    )
}

export default ListOfFriends