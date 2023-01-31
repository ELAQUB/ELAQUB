import React from 'react'
import '../sass/Connect.scss'
import one from '../assets/images/edit1.png'
import two from '../assets/images/edit2.png'
import three from '../assets/images/edit3.png'
import four from '../assets/images/edit4.png'
import five from '../assets/images/edit5.png'
import six from '../assets/images/edit6.png'
import seven from '../assets/images/edit7.png'

const Connect = () => {
  return (
    <div className='connect'>
        <div className="text">
            <small>JOIN THE COMMUNITY</small>
            <h2>Of the fastest growing community for indigenous African learners</h2>
            <p>Learn, meet and share knowledge with people from different parts of the continent</p>
        </div>
        <div className="container">
            <div className="center"></div>
            <div className="left"></div>
            <div className="right"></div>
        </div>
        <div className="circles">
            <div className="one">
              <img src={one} alt="" />
            </div>
            <div className="two">
            <img src={two} alt="" />
            </div>
            <div className="three">
            <img src={three} alt="" />
            </div>
            <div className="four">
            <img src={four} alt="" />
            </div>
            <div className="five">
            <img src={five} alt="" />
            </div>
            <div className="six">
            <img src={six} alt="" />
            </div>
            <div className="seven">
            <img src={seven} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Connect