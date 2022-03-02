import { Button } from '@chakra-ui/react'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setAuthAll } from '../redux/reducers/authReducer'

function Test() {
    const dispatch = useDispatch()
    let userAuth = useSelector(state => state.auth)

    const reduxMe = () => {
        const userData = {
                id: "1",
                username: "forlaenu",
                facebookId: "facebookIdString",
                facebookAuth: "facebookAuthString",
                facebookKey3: "facebookKey3String",
                facebookKey4: "facebookKey4String",
                twitterId: "twitterIdString",
                twitterAuth: "twitterAuthString",
                twitterKey3: "twitterKey3String",
                twitterKey4: "twitterKey4String",
        }
        dispatch(setAuthAll(userData))
        for(const [key, value] of Object.entries(userAuth)){
            console.log(`${key}: `)
            for(const [key2, value2] of Object.entries(value)){
                console.log(`${key2}: ${value2}`)
            }
        }
    }
  return (
    <div style={{marginLeft: "400px"}}><h1>Test pages</h1>
    <Button onClick={reduxMe}>Add Auth Redux</Button>
    <p> I let userAuth be equal to useSelector(state.auth) which is the reducers for user authorization data</p>
    <p> ie: local.id:{userAuth.local.id}, local.username: {userAuth.local.username}</p>
    <p> using const userId = userAuth.local.id gives us: userId={userAuth.local.id}, because userAuth refs state.auth</p>
    <p> and inside state.auth exists the objects: local, facebookAuth, and twitterAuth.</p>
    <p> userAuth.twitterAuth.key3 = {userAuth.twitterAuth.key3}</p>
    <p> this is the user data: const userData = </p>
                <p>id: "1",</p>
                <p>username: "forlaenu",</p>
                <p>facebookId: "facebookIdString",</p>
                <p>facebookAuth: "facebookAuthString",</p>
                <p>facebookKey3: "facebookKey3String",</p>
                <p>facebookKey4: "facebookKey4String",</p>
                <p>twitterId: "twitterIdString",</p>
                <p>twitterAuth: "twitterAuthString",</p>
                <p>twitterKey3: "twitterKey3String",</p>
                <p>twitterKey4: "twitterKey4String",</p>
    </div>
  )
}

export default Test