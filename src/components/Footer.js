import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import '../sass/Footer.scss'
import plane from '../assets/images/paperplane.png'
import elaqub from '../assets/images/ELAQUB.png'


const Footer = () => {
    const [open, setOpen] = useState(false);
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
    <div className='footer'>
        <div className="signup">
            <h2>Join now and start your <span>learning</span>. <br />
                Get a <span>certificate</span> too!!!</h2>
            
                <label>
                    <input type="email" name="email" id="email" placeholder="Get started now!" />
                    <button type="submit"><img src={plane} alt={'foward key'} /></button>
                </label>
        </div>
        <footer>
            <div className="text">
                <img src={elaqub} alt={'elaqub logo'} />
                <br />
                <p>
                    ELAQUB is a fast growing educational platform for Nigerians,
                    aimed at giving out the best forms of self development principles to Nigerian
                    citizens.
                </p>
            </div>

            <div className="social">
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
                    <Link to='/' className={`link`}>Blog</Link>
                </nav>

                <div className="icon">
                    <a href="https://www.facebook.com/elaqub" target="_blank"><div className="circle"><i class="fa-brands fa-facebook-f fa-2x"></i></div></a>
                    <a href="/"><div className="circle" target="_blank"><i class="fa-brands fa-youtube fa-2x"></i></div></a>
                    <a href="https://www.instagram.com/elaqub/" target="_blank"><div className="circle"><i class="fa-brands fa-instagram fa-2x"></i></div></a>
                </div>
            </div>
        </footer>

        <hr />

        <div className="rights">
            <p>Copyright @ 2022 ELAQUB. All rights reserved</p>
            <aside>
                <a href="http://" target="_blank" rel="noopener noreferrer">Privacy Policy</a> &#x2022;
                <a href="http://" target="_blank" rel="noopener noreferrer"> Terms of Service</a> &#x2022;
                <a href="http://" target="_blank" rel="noopener noreferrer"> Site Notice</a>
            </aside>
        </div>
    </div>
  )
}

export default Footer