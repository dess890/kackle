import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import Cards from './Cards'
import SideNav from './SideNav'


function GridForProfile() {
    return (
        <div style={{ marginBottom: '5%' }}>
            <Grid
                paddingTop='5%'
                h='900px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
            >
                <GridItem rowSpan={2} colSpan={1} style={{}}>

                </GridItem>

                <GridItem style={{ paddingTop: '5%' }} colSpan={4} rowSpan={2} bg='papayawhip'>
                    <div style={{ display: 'flex', width: "75vw", height: "35vw", backgroundColor: "#ffaf6e", boxShadow: '10px 10px 5px darkgrey' }}>
                        <div className='greybox'>
                        </div>
                        <div className='childbox' style={{ width: '40%', height: '100%', backgroundColor: '#ffaf6e', borderRight: '5px solid #f6d5ba' }}>
                            <h3 style={{ color: 'white' }}>@dess_html</h3>
                            <div style={{ marginLeft: '25%', paddingTop: '20%', paddingRight: '10%', borderRadius: '50%', backgroundColor: 'white', height: '40%', width: '54%' }}>
                            </div>
                            <p style={{ color: 'white', marginTop: '20%' }}>location: here, there, everywhere.</p>
                            <p>link:"url"</p>
                            <p>Followers: 65 Following: 100</p>
                        </div>
                        <div className='greybox' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
                            <h2>kackle kount: 4538409</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
                            <div className='iconsicons'>

                            </div>
                        </div>
                    </div>
                </GridItem>
            </Grid>
        </div>
    )
}

export default GridForProfile