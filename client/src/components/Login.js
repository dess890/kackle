import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Button, Alert, AlertIcon, Text, Link } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../redux/reducers/userReducer';
import Password from './Password'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function ErrorMessageExample() {
    const [input, setInput] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const isErrorUsername = input === ''
    const isErrorPassword = password === ''
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
            <FormControl isInvalid={isErrorUsername}>
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
                {!isErrorUsername ? (
                    <FormHelperText>
                        Enter the username registered with kackle.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>Enter the username registered with kackle.</FormErrorMessage>
                )}
                </FormControl>
                <FormControl isInvalid={isErrorPassword}>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Password value={password}
                    onChange={handlePasswordChange} name='password' />
                    {!isErrorPassword ? (
                        <FormHelperText>
                            Enter a password
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>Password is required.</FormErrorMessage>
                    )}
            </FormControl>
            <Button type='submit' colorScheme='orange'>
                Submit
            </Button>
            <Text>Dont have an account yet? </Text><Link to="../register" as={ReactLink}> Register Here <ExternalLinkIcon mx='2px' /></Link>



        </form>
    )
}


