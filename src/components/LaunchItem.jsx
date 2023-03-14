import { HiCalendar } from 'react-icons/hi'
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { Icon, Box, Flex, Text, Spacer, Tag, Button } from '@chakra-ui/react';


function LaunchItem(launch) {
  return (
  <Box bg="gray.100" p={4} m={4} borderRadius="lg">
    <Flex>
      <Text>
        Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
      </Text>
      <Spacer/>
      <Tag p={2} colorScheme={launch.launch_success ? 'green': 'red'}>
        {launch.launch_success ? 'success': 'failure'}
      </Tag>
    </Flex>
    <Flex>
      <Icon as={HiCalendar} color="gray.500"></Icon> 
      <Text color="gray.500" fontSize="sm" ml="1">
        {dayjs(launch.launch_date_local)
          .locale('es')
          .format('D MMMM, YYYY')}
      </Text>
    </Flex>
    <Button mt={2} colorScheme="purple">More details</Button>
  </Box>
  )
}

export default LaunchItem;