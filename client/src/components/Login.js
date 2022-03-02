import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import Password from './Password'

export default function ErrorMessageExample() {
    const [input, setInput] = useState('')
    const [password, setPassword] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const isError = input === ''

    return (
        <FormControl isInvalid={isError}>
            <FormLabel htmlFor='username'>Username</FormLabel>
            <Input
                id='username'
                type='text'
                value={input}
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
                onChange={handlePasswordChange} />

            <Button colorScheme='teal' variant='outline'>
                Submit
            </Button>

        </FormControl>
    )
}


