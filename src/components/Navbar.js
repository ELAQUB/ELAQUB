import React from 'react'
import { useState, useRef } from 'react'
import '../sass/Navbar.scss'
import elaqub from '../assets/images/ELAQUB.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const navRef = useRef(null);

    const handleMouseEnter = () => {
        setOpen(true);
      };
    
      const handleMouseLeave = (event) => {
        if (!navRef.current || !navRef.current.contains(event.relatedTarget)) {
          setOpen(false);
        }
      };

  return (
    <header>

      <Link to='/'><img src={elaqub} alt={'Logo'} /></Link>

      <div className="nav">
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

        <Link to='' className={`sign`}>Get started</Link>
      </div>

      {/* for mobile menu */}

      <button className="mobile" onClick={() => setOpenMenu(!openMenu)}>Menu</button>
          {openMenu &&(
              <nav className="mobilemenu">
                <Link to='/about' className={`link`}>About</Link>
                <Link to='/' className={`link`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Courses <i class="fa-solid fa-chevron-right"></i></Link>
                  {open &&(
                    <div className="navbar" ref={navRef} onMouseLeave={handleMouseLeave}>
                      <Link to='/' className={`link sib`}>Graphic Design</Link>
                      <Link to='/' className={`link sib`}>Copy Writing</Link>
                      <Link to='/' className={`link sib`}>Web development</Link>
                    </div>
                  )}
                <Link to='' className={`link`}> Blog </Link>

                <Link to='' className={`sign`}>Get started</Link>
              </nav>
            )
          }

    </header>
  )
}


export default Navbar