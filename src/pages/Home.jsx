import React from 'react'
import Main from '../components/Main.jsx'
import Navbar from '../components/Navbar';
import Row from '../components/Row'
import requests from '../Request.js'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Main /> 
      <Row rowID="1" title='Popular'     fetchURL={requests.requestPopular}/>
      <Row rowID="2" title='Top-Rated'   fetchURL={requests.requestTopRated}/>
      <Row rowID="3" title='Upcoming'    fetchURL={requests.requestUpcoming}/>
      <Row rowID="4" title='Now-Playing' fetchURL={requests.requestNowPlaying}/>
    </div>
  )
}

export default Home
