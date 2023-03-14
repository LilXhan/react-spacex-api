import { Heading, Image } from '@chakra-ui/react';
import LaunchItem from './components/LaunchItem';

import * as API from './services/launches'
import logo from './assets/logo.png'



function App() {

  const { launches } = API.getAllLaunches();

  return (
    <>
      <Image m={4} src={logo} width={300} />
      <Heading as="h1" size='lg' textAlign="center"> 
        Spacex Launches
      </Heading>
      <section>
          {launches?.map((launch, index) => (
            <LaunchItem key={index} {...launch}></LaunchItem>
          ))}
      </section>
    </>
  )
}

export default App
