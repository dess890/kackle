import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

export default function ErrorMessageExample() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (e) => setUsername(e.target.value)
    const isError = username === ''

    return (
        <FormControl isInvalid={isError}>
            <FormLabel htmlFor='username'>Username</FormLabel>
            <Input
                id='username'
                type='email'
                value={username}
                onChange={handleUsernameChange}
            />
            {!isError ? (
                <FormHelperText>
                    Enter the email you'd like to use to register with kackle.
                </FormHelperText>
            ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
        </FormControl>
    )
}


