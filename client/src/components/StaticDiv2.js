import batman from '../img/batman.png'
import elden from '../img/elden.png'
import { Text, HStack, VStack, StackDivider } from '@chakra-ui/react'


// Vertical stacks and Horizontal stacks to neatly fit content from social media
export default function StaticDiv1() {
  return (
    <div className="static">
      <VStack divider={<StackDivider borderColor='orange.200' border='1 dashed orange' />} spacing={4} align='stretch'>

        <HStack h='40px' direction={'row'}>
          <Text fontSize='xs'>🎥 Entertainment</Text>
        </HStack>

        <HStack h='40px' divider={<StackDivider border='none' />} spacing={10}>
          <Text fontWeight='bold' fontSize='lg' as='a' href='https://deadline.com/2022/03/hbo-max-orders-the-penguin-limited-series-as-the-batman-clocks-301m-at-ww-box-office-1234974516/'>'The Batman' Clocks $301M+ At WW Box Office, HBO picks up spin-off series.</Text>
          {/* <img className='map' src={batman} alt="Batman " /> */}
        </HStack>

        <HStack spacing={10}>
          <Text fontWeight='bold' fontSize='lg' as='a' href='https://www.ign.com/articles/elden-ringsteam-sixth-biggest-game-concurrents-new-world'>Elden Ring Overtakes New World to Become Steam's Sixth Biggest Game </Text>
          <img className='map' src={elden} alt="Elden Ring" />
        </HStack>
      </VStack>
      {/* <Routes>
        <Route path="/trending" element={<TwitterFeed />} />
      </Routes> */}
    </div>
  );
}




