
import { Heading } from '@chakra-ui/react';
import LaunchItem from './LaunchItem';
import * as API from '../services/launches'


function LaunchList() {

  const { launches, loading } = API.getAllLaunches();
 
  return (
    <>
      <Heading as="h1" size='lg' textAlign="center"> 
        Spacex Launches
      </Heading>
      <section>
          {loading && <p>Loading...</p>}
          {launches?.map((launch, index) => (
            <LaunchItem key={index} {...launch}></LaunchItem>
            ))}
      </section>
    </>
  )
}

export default LaunchList;