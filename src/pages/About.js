import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import aboutimg from '../assets/images/aboutimg.svg'
import '../sass/About.scss'

const About = () => {
  return (
    <div className='about'>
        <Navbar className={`nav`}/>
        <main>
          <div className="hero">
            <img src={aboutimg} alt="" />
          </div>
          <div className="text">
            <p>
            ElaQub is the fastest-growing online digital platform aimed to help you gain the best in-demand skills 
            from the comfort of your home. You’ll be trained to become an expert in your industry by unlocking the 
            hidden capacity in you. Learning is beautiful and learning from professionals makes it a million times 
            easier.
            </p>

            <p>
            We are professionals on a mission to train millions of youths from ages 14 to 35 years, the metric to have 
            leverage on high employability digital courses. The world is going digital, so here's a chance to join the 
            trend.
            </p>
          </div>

          <Link to='/register' className='link'>Get Started</Link>
        </main>
    </div>
  )
}

export default About