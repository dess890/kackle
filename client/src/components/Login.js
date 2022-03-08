import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Button, Alert, AlertIcon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../redux/reducers/userReducer';
import Password from './Password'

export default function ErrorMessageExample() {
    const [input, setInput] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const isError = input === ''
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/auth/local/login', {
            method: 'POST',
            redirect: 'follow',
            body: JSON.stringify({
                username: input,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.redirected) {
                    return res.json()
                }
                return { success: 'successfully logged in' }
            })
            .then(data => {
                if (data.error) {
                    setError(data.error)
                } else {
                    setInput('')
                    setPassword('')
                    setError('')
                    dispatch(setCurrentUser(data))
                    navigate('/home')
                }
            })
    }
    const host = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''
    return (
        <form onSubmit={handleSubmit}>
            <FormControl isInvalid={isError}>
                {error && (
                    <Alert maxWidth="400px" mx="auto" my="5" status='error' variant='subtle'>
                        <AlertIcon />
                        Error!&nbsp;{error}
                    </Alert>
                )}
                <FormLabel htmlFor='username'>Username</FormLabel>
                <Input
                    id='username'
                    type='text'
                    value={input}
                    name='username'
                    onChange={handleInputChange}
                />
                {!isError ? (
                    <FormHelperText>
                        Enter the username registered with kackle.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>Password is required.</FormErrorMessage>
                )}
                <Password value={password}
                    onChange={handlePasswordChange} name='password' />
                <Link to="../register">Dont have an account yet? Register Here.</Link>

                <Button type='submit' colorScheme='orange' variant='outline'>
                    Submit
                </Button>
                <Button as='a' href={host + '/auth/facebook'} colorScheme='facebook'>
                    Login with Facebook.
                </Button>
                <Button as='a' href={host + '/auth/twitter'} colorScheme='twitter'>
                    Login with twitter.
                </Button>
            </FormControl>
        </form>
    )
}


