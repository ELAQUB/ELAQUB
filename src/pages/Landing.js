import React from 'react'
import '../sass/Landing.scss'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Landing = () => {
  return (
    <div className='landing'>
        <Navbar/>

        <Hero/>
        
    </div>
  )
}

export default Landing