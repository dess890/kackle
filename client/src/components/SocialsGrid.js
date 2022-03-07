import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import '../scss/Chat.scss'
import ListOfFriends from './ListOfFriends'
import { Heading } from '@chakra-ui/react'
import DirectMessaging from './DirectMessaging'

function SocialsGrid() {

    return (
        <div>
            <Grid
                h='900px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
            >
                <GridItem rowSpan={4} colSpan={6} bg='papayawhip' style={{ marginLeft: '20%' }}>
                    {/* <div style={{ display: 'flex', flexDirection: 'column' }}> */}

                    <GridItem style={{ paddingTop: '3%' }} colSpan={4} rowSpan={2} bg='papayawhip'>
                        <div style={{ display: 'flex', flexDirection: 'column', width: "75vw", height: "45vw", marginLeft: '3%', backgroundColor: "#ffaf6e", boxShadow: '10px 10px 5px darkgrey' }}>
                            <div style={{ float: 'right', marginTop: '7%', marginRight: '5%', width: '300px', marginLeft: '70%' }}>
                            </div>
                            <DirectMessaging />
                        </div>
                    </GridItem>
                    {/* </div> */}
                </GridItem>

            </Grid>
        </div >
    )
}

export default SocialsGrid