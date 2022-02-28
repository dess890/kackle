import { Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (e) => setUsername(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handleSubmit = (e) =>{
        e.preventDefault();
        // submit the form, we need to:
        // verify inputs

        // send api username/password
        
        // wait for response
        // if good: 
        // if bad: 
    }

    const isErrorUsername = username === ''
    const isErrorPassword = password === ''

    return (
        <div>
            <FormControl isInvalid={isErrorUsername}>
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
            <Input
                id='password'
                type='password'
                value={password}
                onChange={handlePasswordChange}
            />
            {!isErrorPassword ? (
                <FormHelperText>
                    Enter a password
                </FormHelperText>
            ) : (
                <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
        </FormControl>
        <Button type="submit" onSubmit={handleSubmit}>Register!</Button>
        </div>
    )
}


