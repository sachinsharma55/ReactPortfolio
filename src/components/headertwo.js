import React from 'react';
import { Link } from 'react-router-dom';
import down from '../pages/example.jpg'


const Headertwo = () => {
  return (

    <div  >
        <div className='fixed_icons ' >
            <ul>
                <li title='Home'><Link to='/'><i className="fa-solid fa-house-chimney"></i></Link></li>
                <li title='About'><Link to='/about'><i className="fa-regular fa-user"></i></Link></li>
                <li title='Contact'><Link to='/contact'><i className="fa-regular fa-address-card"></i></Link></li> 
                <li title='Testimonials'><Link to='/testimonials'><i className="fa-solid fa-users"></i></Link></li>
                <li title='Resume'><Link to='/resume'><i className="fa-regular fa-file"></i></Link></li>
                <li title='Download CV' ><a href={down} download><i className="fa-solid fa-download"></i></a></li>

            </ul>
        </div>

    </div>


  )
}

export default Headertwo;