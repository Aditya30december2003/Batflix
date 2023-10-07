import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Main from './components/Main'
import Row from './components/Row'
import requests from './Request.js'
import Footer  from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Main /> 
      <Row rowID="1" title='Popular'     fetchURL={requests.requestPopular}/>
      <Row rowID="2" title='Top-Rated'   fetchURL={requests.requestTopRated}/>
      <Row rowID="3" title='Upcoming'    fetchURL={requests.requestUpcoming}/>
      <Row rowID="4" title='Now-Playing' fetchURL={requests.requestNowPlaying}/>
      <Footer />
    </>
  )
}

export default App
