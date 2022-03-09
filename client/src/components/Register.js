import { Alert, AlertIcon, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PasswordInput from './Password';

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [complete, setComplete] = useState(false)
    const [error, setError] = useState('')

    const handleUsernameChange = (e) => setUsername(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault();
        // submit the form, we need to:
        // verify inputs (no character we dont want, a password of certain size?)
        // send api username/password
        setLoading(true)
        fetch('/auth/local/register', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            // wait for response
            .then(res => {
                // if good: 
                if (res.ok) {
                    setUsername('')
                    setPassword('')
                    setLoading(false)
                    setError('')
                    setComplete(true)
                }
                // if bad:
                else {
                    res.json()
                        .then(data => {
                            console.log(data)
                            setUsername('')
                            setPassword('')
                            setLoading(false)
                            setError(data.error)
                        })
                }
            })
            // if error:
            .catch(res => {
                console.log({
                    error: "error on fetch request",
                    message: res
                })
                setLoading(false)
            })
    }
    
    const isErrorUsername = username === ''
    const isErrorPassword = password === ''

    if (!complete) {
        return (
            <form onSubmit={handleSubmit}>
                <FormControl isInvalid={isErrorUsername} >
                    {/* COMPLETE AND ERROR POPUP MESSAGES*/}
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
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    {!isErrorUsername ? (
                        <FormHelperText>
                            Enter the USERNAME you'd like to use to register with kackle.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>A unique USERNAME is required.</FormErrorMessage>
                    )}
                </FormControl>
                <FormControl isInvalid={isErrorPassword}>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <PasswordInput value={password} onChange={handlePasswordChange} />
                    {!isErrorPassword ? (
                        <FormHelperText>
                            Enter a password
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>Password is required.</FormErrorMessage>
                    )}
                </FormControl>
                <Button type="submit" isLoading={loading} loadingText="Submitting" colorScheme='orange'>Register!</Button>
            </form>
        )
    }
    else {
        return (
            <Alert maxWidth="400px" mx="auto" my="5" status='success' variant='subtle'>
                <AlertIcon />
                Registration successful!&nbsp;<Link style={{ textDecoration: 'underline' }} to="/Login">Click Here to log in.</Link>
            </Alert>
        )
    }
}
