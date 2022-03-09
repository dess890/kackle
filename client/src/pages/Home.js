import React from 'react'
import ScrollDiv from "../components/ScrollDiv";
import StaticDiv from "../components/StaticDiv";
import StaticDiv2 from "../components/StaticDiv2";
import ScrollDivTwo from '../components/ScrollDivTwo';
import { ButtonGroup, Container, IconButton, HStack, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaTwitter } from 'react-icons/fa'


function Home() {

  return (
    <>
      <div className="container">
        <div className="row">
          <ScrollDiv />
          <StaticDiv />
        </div>
        <div className="row2">
          <ScrollDivTwo />
          <StaticDiv2 />
        </div>
      </div>

      {/* footer for homepage */}
      <Container as="footer">
        <HStack spacing={{ md: '5' }}>
          <Stack direction="row" align="center">
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="https://github.com/dess890/kackle"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" color='orange' />} />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.25rem" color='orange' />}
              />
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm">
            Check out our GitHub Repo to see how we made Kackle!
            {/* &copy; {new Date().getFullYear()} Kackle Inc. All rights reserved. */}
          </Text>
        </HStack>
      </Container>
    </>
  )
}

export default Home