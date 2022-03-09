import React, { useState } from 'react'
import { Avatar, ButtonGroup, Container, FormControl, Grid, GridItem, HStack, IconButton, Input, Stack, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';


function GridForProfile() {
    const userKackleName = useSelector(state => state.user.user.username)
    const [bio, setBio] = useState("")



    return (

        <div>
            < Grid
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
                            <Text fontSize='3xl' color='white'>{userKackleName}</Text>
                            < Avatar bg='orange.500' icon={<AiOutlineUser fontSize='5.5rem' style={{ marginLeft: '25%' }} />} style={{ marginLeft: '25%', paddingTop: '20%', paddingRight: '10%', height: '30%', width: '44%' }} />
                            <p style={{ color: 'white', marginTop: '20%' }}>location: here, there, everywhere.</p>
                            <p>link:</p><a href='https://github.com/dess890/kackle' target='_blank' rel='noreferrer'>https://github.com/dess890/kackle</a>
                            <p style={{ color: 'white' }}>Twitter: ✅ Facebook: ✅ </p>
                        </div>
                        <div className='greybox' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
                            <Text fontSize='3xl'>kacklin bio</Text>
                            <h2 style={{ marginLeft: '17%', marginTop: '1%' }}>Hello, I'm Desirree Adegunle! I often go by Dess. I am a Software Engineer with a knack for picking up new skills and frameworks.  Prior to my career change, I delved heavily in language and writing.
                                I worked as a copy editor for the oldest American Poet House at Poet Lore, and as a researcher in language and culture in London, UK. As I started reevaluating on how I could truly transform my passion for tech into a career, I began self-teaching core programming concepts such as HTML and Javascript. By late 2021, I had joined a coding bootcamp--Digital Crafts--which focused on teaching full-stack development including, but not limited
                                to JavaScript, Python, with an emphasis on cutting-edge frameworks like React/Redux and server-side technologies such as Node.js, Express, and PostgreSQL. I primarily focus on Front-end Development, specifically frameworks including React. Overall, I am passionate about the bridge that programming builds to accessibility amongst all and an overall more inclusive environment surrounding technology."
                            </h2>
                        </div>
                        <div className='iconsicons'>
                            <Container as="footer">
                                <HStack spacing={{ md: '5' }}>
                                    <Stack direction="row" align="center">
                                        <ButtonGroup variant="ghost">
                                            <IconButton
                                                as="a"
                                                href="https://www.facebook.com/desirreeadegunle"
                                                aria-label="Facebook"
                                                icon={<FaFacebook fontSize="1.25rem" color='black' />} />
                                            <IconButton
                                                as="a"
                                                href="twitter.com/dess_html"
                                                aria-label="Twitter"
                                                icon={<FaTwitter fontSize="1.25rem" color='black' />}
                                            />
                                        </ButtonGroup>
                                    </Stack>
                                    <Text fontSize="sm">
                                        Check out my twitter and/or Facebook!
                                    </Text>
                                </HStack>
                            </Container>
                        </div>
                    </div>
                </GridItem>
            </Grid>
        </div >
    )
}

export default GridForProfile