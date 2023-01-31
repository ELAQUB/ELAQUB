import React from 'react'
import '../sass/Offers.scss'
import design from '../assets/images/design.webp'
import web from '../assets/images/web.png'
import copy from '../assets/images/copywriting.webp'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="text">
            <small>100% FREE</small>

            <h2>
                Start with our <span>free</span> courses
            </h2>

            <p>
                Join us in the anticipation of our maiden launch and get access to
                one of these three offered courses.
            </p>
        </div>

        <div className="container">
            <div className="card">
                <img src={design} alt={'graphic design'} /> <br />
                <h4>Graphic Design</h4> <br />
                <p>Gives you different insight on how to manipulate pictures and make appealing and aesthetic graphic designs</p>
            </div>
            <div className="card">
                <img src={web} alt={'web development'} /> <br />
                <h4>Web Development</h4> <br />
                <p>Learn the resources and the skills on how to build websites and understand their different uses.</p>
            </div>
            <div className="card">
                <img src={copy} alt={'Copy writing'} /> <br />
                <h4>Copy Writing</h4> <br />
                <p>Understand the principles of captivating and channeling the right idea to any audience you face.</p>
            </div>
        </div>
    </div>
  )
}

export default Offers