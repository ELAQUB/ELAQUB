import React from 'react'
import { useState, useRef } from 'react'
import '../sass/Navbar.scss'
import elaqub from '../assets/images/ELAQUB.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navRef = useRef(null);

    const handleMouseEnter = () => {
        setOpen(true);
      };
    
      const handleMouseLeave = (event) => {
        // Check if the mouse left the nav or one of its children
        if (!navRef.current || !navRef.current.contains(event.relatedTarget)) {
          setOpen(false);
        }
      };

  return (
    <header>

        <Link to='/'><img src={elaqub} alt={'Logo'} /></Link>

        <nav>
            
            <Link to='/about' className={`link`}>About</Link>
            <Link className={`link`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Courses <i class="fa-solid fa-chevron-right"></i></Link>
            {open && (
                <div className="navbar" ref={navRef} onMouseLeave={handleMouseLeave}>
                    <Link to='/' className={`link sib`}>Graphic Design</Link>
                    <Link to='/' className={`link sib`}>Copy Writing</Link>
                    <Link to='/' className={`link sib`}>Web development</Link>
                </div>
            )}
            <Link to='' className={`link`}> Blog </Link>
        </nav>

    </header>
  )
}


export default Navbar