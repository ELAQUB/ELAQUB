import React from 'react'
import '../sass/Landing.scss'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Program from '../components/Program'
import Offers from '../components/Offers'
import '../App.scss'
import Connect from '../components/Connect'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div className='landing'>
        <Navbar/>

        <Hero/>

        <Program/>

        <Offers/>

        <Connect/>

        <Footer/>

    </div>
  )
}


export default Landing