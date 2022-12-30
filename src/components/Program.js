import React from 'react'
import { useEffect, useRef } from 'react';
import '../sass/Program.scss'
import bulb from '../assets/images/bulb.png'
import people from '../assets/images/people.png'
import book from '../assets/images/book.png'

const Program = () => {

    const divRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
        const elementTop = divRef.current.getBoundingClientRect().top;
        const elementBottom = divRef.current.getBoundingClientRect().bottom;

        if (elementTop <= window.innerHeight && elementBottom >= 0) {
            divRef.current.classList.add('program');
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className='program' ref={divRef}>
        <div className="text">
            <h2>Our Program</h2> <br />

            <p>
                Join and take part at the inception of the indigeneous
                learning platform, made for Nigerians, by Nigerians
            </p>
        </div>
        <div className="container">
            <div className="card">
                <img src={bulb} alt={'creative thinking'} />
                <h4>Creative Thinking</h4>
                <p>
                    Bala blu townhall cassava bala <br /> eneme army super bala eba.
                </p>
            </div>
            <div className="card">
                <img src={book} alt={'documenting discovery'} />
                <h4>Documenting discovery</h4>
                <p>
                    Bala blu townhall cassava bala <br /> eneme army super bala eba.
                </p>
            </div>
            <div className="card">
                <img src={people} alt={'teammates'} />
                <h4>Build a team</h4>
                <p>
                    Bala blu townhall cassava bala <br /> eneme army super bala eba.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Program