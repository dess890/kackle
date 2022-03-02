import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

function Socials() {
    return (
        <div>
            <Grid
                h='200px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
            >
                <GridItem colSpan={2} bg='papayawhip' />
                <GridItem colSpan={2} bg='papayawhip' />
            </Grid>
        </div>
    )
}

export default Socials