import flag from './flag.png'
import { Box, Stack, Text, HStack, VStack, StackDivider } from '@chakra-ui/react'
import { Routes, Route, Link } from "react-router-dom";


// Vertical stacks and Horizontal stacks to neatly fit content from social media
export default function StaticDiv1() {
  return (
    <div className="static">
      <VStack divider={<StackDivider borderColor='gray.200' />} spacing={1} align='stretch'>

        <HStack h='40px' direction={'row'}>
          <Text fontSize='xs'>Ukraine Conflict</Text>
        </HStack>

        <HStack h='40px' divider={<StackDivider border='none' />}spacing={10}>
          <Text fontWeight='bold' fontSize='lg'>President Zelensky vows to stay in Kiev</Text>
          <img className='flag' src={flag} alt="Ukrainian Flag" />
        </HStack>

        <HStack h='40px' >
        <Text fontWeight='bold' fontSize='lg'>Biden gives first SOTU</Text>
        
        </HStack>

      </VStack>
      {/* <Routes>
        <Route path="/trending" element={<Home />} />
      </Routes> */}
    </div>
  );
}




