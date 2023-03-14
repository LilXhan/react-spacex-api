import { Routes, Route } from 'react-router-dom';
import LaunchList from './components/LaunchList';
import LaunchDetails from './components/LaunchDetail';
import { Image } from '@chakra-ui/react';

import logo from './assets/react.svg'


function App() {
  return (
    <>
      <Image m={4} src={logo} />
      <Routes>
        <Route path='/' element={<LaunchList />} />
        <Route path='launch/:launchId' element={<LaunchDetails />} />
      </Routes>
    </>
  )
}

export default App
