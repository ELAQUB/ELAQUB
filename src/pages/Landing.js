import React from 'react'
import '../sass/Landing.scss'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Program from '../components/Program'

const Landing = () => {
  return (
    <div className='landing'>
        <Navbar/>

        <Hero/>

        <Program/>
    </div>
  )
}

export default Landing