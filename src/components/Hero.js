import React from 'react'
import { useEffect, useRef } from 'react'
import '../sass/Hero.scss'
import plane from '../assets/images/paperplane.png'
import hero from '../assets/images/heroimg.png'
import mouse from '../assets/images/mouse.png'

const Hero = () => {

    const textRef = useRef(null);

    useEffect(() => {
        textRef.current.classList.add('fade-in');
    }, []);

  return (
    <div className='hero'>
        <main>
            <div className="text" ref={textRef}>
                <small>
                    INTRODUCING INTERACTIVE
                </small>
                <h2>
                    Learning courses with advanced <span>Teachers</span>!
                </h2>

                <p>
                    Africa's fast growing e-learning platform to get
                    you started in your choosen career. 
                </p>

                <label>
                    <input type="email" name="email" id="email" placeholder="Get started now!" />
                    <button type="submit"><img src={plane} alt={'foward key'} /></button>
                </label>
            </div>

            <div className="pict">
                <img src={hero} alt={'hero img'} />
            </div>
        </main>

        <img src={mouse} alt={mouse} id='mouse' />
    </div>
  )
}

export default Hero