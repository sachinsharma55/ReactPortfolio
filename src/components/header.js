import React , {useState} from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (index) => {
      setActiveLink(index);
    };



  return ( 

    <div data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
        <nav>
            <ul>
                <li><Link to='/' ><div className='sidebarImg'></div></Link></li>
                <li><Link to='/' onClick={() => handleLinkClick(0)} className={activeLink === 0 ? 'active' : ''}>Home</Link></li>
                <li><Link to='/about' onClick={() => handleLinkClick(1)} className={activeLink === 1 ? 'active' : ''}>About</Link></li>
                <li><Link to='/contact' onClick={() => handleLinkClick(2)} className={activeLink === 2 ? 'active' : ''}>Contact</Link></li>

                <li><Link to='/testimonials' onClick={() => handleLinkClick(3)} className={activeLink === 3 ? 'active' : ''}>Testimonials</Link></li>
                <li><Link to='/resume' onClick={() => handleLinkClick(4)} className={activeLink === 4 ? 'active' : ''}>Resume</Link></li>
            </ul>
        </nav>

    </div>


  )
}

export default Header;