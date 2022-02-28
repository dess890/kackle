import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

export default function ErrorMessageExample() {
    const [input, setInput] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)
    const isError = input === ''

    return (
        <FormControl isInvalid={isError}>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input
                id='email'
                type='email'
                value={input}
                onChange={handleInputChange}
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


