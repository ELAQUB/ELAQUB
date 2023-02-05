import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aboutimg from '../assets/images/aboutimg.svg'
import pamela from '../assets/images/pamela.svg'
import frank from '../assets/images/frank.svg'
import theo from '../assets/images/theo.svg'
import copy from '../assets/images/copywriting.webp'
import web from '../assets/images/web.png'
import design from '../assets/images/design.webp'
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

        <div className="vision">
          <h1>Our Vision</h1>
          <p>
          Our vision is to ensure that the youths of Nigeria do not suffer unemployment or become penniless after 
          graduating from high school or the University. Following the track of this beautiful life-changing 
          opportunity to learn high employability courses, the future of this generation and the next to come will be a 
          better place.
          </p>
        </div>

        <div className="tutors">
          <div className="card">
            <img src={pamela} alt={'Pamela Aruma'} />
            <p>Pamela Aruma <span>Copy writer</span></p>
          </div>
          <div className="card">
            <img src={frank} alt={'Franklin Odigbo'} />
            <p>Franklin Odigbo <span>Frontend Developer</span></p>
          </div>
          <div className="card">
            <img src={theo} alt={'Theophilus Ajah'} />
            <p>Theophilus Ajah <span>Graphic Designer</span></p>
          </div>
        </div>

        <div className="benefits">
          <h1>Why join ElaQub?</h1>

          <div className="card">
            <div className="container">
              <h3>Get a certificate</h3>
              <p>
                The fundamental trainning you receive here would leave 
                you with a valid certificate which would prove your skils,
                you can use it as views of your acheivements.
              </p>
            </div>
            <div className="container">
              <h3>Free valid resources</h3>
              <p>
                ElaQub provides you with various resources which you can
                use in various ways to enhance your learning process. You 
                also get our exclusive starter E-book!
              </p>
            </div>
            <div className="container">
              <h3>Free mentorship</h3>
              <p>
                Get access to people who are willing to coach you irrespective
                of your level. You will get first hand guide to help you with 
                your learning process
              </p>
            </div>
            <div className="container">
              <h3>Access to team members</h3>
              <p>
                Find diversity in thic cohort and learn to collaborate on
                amazing projects with different peoples and culture. Make 
                new and amazing relationships
              </p>
            </div>
          </div>
        </div>

        <div className="courses">
            <h1>Start with our free courses</h1>
            <div className="card">
              <div className="container">
                <img src={design} alt={'Graphic design'} />
                <p>Graphic Design</p>
              </div>
              <div className="container">
                <img src={copy} alt={'Copy Writing'} />
                <p>Copy Writing</p>
              </div>
              <div className="container">
                <img src={web} alt={'Web development'} />
                <p>Web development</p>
              </div>
            </div>
          </div>

        <Footer/>
    </div>
  )
}

export default About