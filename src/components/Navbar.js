import React from 'react'
import { useState, useRef, useEffect } from 'react'
import '../sass/Navbar.scss'
import elaqub from '../assets/images/ELAQUB.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
      const handleClickOutside = event => {
        if (openMenu && navRef.current && !navRef.current.contains(event.target)) {
          setOpenMenu(false);
        }
      };
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [openMenu]);

    const handleClick = link => {
      setActiveLink(link);
    };

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
            <Link to='/about' className={`link ${activeLink === '/about' ? 'active' : ''}`} onClick={() => handleClick('/about')}>About</Link>
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

        <Link to='/register' className={`sign`}>Get started</Link>
      </div>

      {/* for mobile menu */}

      <button className="mobile" onClick={() => setOpenMenu(!openMenu)}><i className={`fa-solid fa-${openMenu ? 'times' : 'bars'} fa-2x`} /></button>
          {openMenu &&(
              <nav className={`mobilemenu ${openMenu ? 'open' : ''}`}>
                <Link to='/about' className={`link`}>About</Link>
                <Link to='' className={`link`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Courses <i class="fa-solid fa-chevron-right"></i></Link>
                  {open &&(
                    <div className="navbar" ref={navRef} onMouseLeave={handleMouseLeave}>
                      <Link to='/' className={`link sib`}>Graphic Design</Link>
                      <Link to='/' className={`link sib`}>Copy Writing</Link>
                      <Link to='/' className={`link sib`}>Web development</Link>
                    </div>
                  )}
                <Link to='' className={`link`}> Blog </Link>

                <Link to='/register' className={`sign`}>Get started</Link>
              </nav>
            )
          }

    </header>
  )
}


export default Navbar