import map from '../img/map.jpg'
import flag from '../img/flag.png'
import support from '../img/missiles.jpg'
import { Box, Stack, Text, HStack, VStack, StackDivider } from '@chakra-ui/react'
import { Routes, Route, Link } from "react-router-dom";


// Vertical stacks and Horizontal stacks to neatly fit content from social media
export default function StaticDiv1() {
  return (
    <div className="static">
      <VStack divider={<StackDivider borderColor='orange.200' border='1 dashed orange' />} spacing={3} align='stretch'>

        <HStack h='40px' direction={'row'}>
          <img className='flag' src={flag} alt="Ukrainian Flag" />
          <Text fontSize='xs'>Ukraine Conflict</Text>
        </HStack>

        <HStack h='40px' divider={<StackDivider border='none' />} spacing={10}>
          <Text fontWeight='bold' fontSize='lg' as='a' href='https://time.com/6155330/ukraine-invasion-us-military-support/'>Biden Administration requests $10 Billion in funding for arms and humanitarian aid</Text>
          {/* <img className='support' src={support} alt="Ukrainian Soldiers" /> */}
        </HStack>

        <HStack spacing={10}>
          <Text fontWeight='bold' fontSize='lg' as='a' href='https://www.bbc.com/news/live/world-europe-60635927'>Live Updates: Millions of Ukrainian refugees seek asylum</Text>
          <img className='map' src={map} alt="Ukrainian Map" />
        </HStack>
      </VStack>
      {/* <Routes>
        <Route path="/trending" element={<TwitterFeed />} />
      </Routes> */}
    </div>
  );
}




