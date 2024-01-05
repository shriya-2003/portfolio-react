import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpg';
import contactImg from '../../assets/contact.jpg';
import { Link } from  'react-scroll';

const Navbar = () => {
  return (
   <nav className="navbar">
    <img src={logo} alt="Logo" className='logo'/>
    <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">About</Link>
        <a href="https://drive.google.com/file/d/1Z6V08DSPYf6lCcKMxBh_NpcPdkGHd6zO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="desktopMenuListItem" style={{ color: 'white' }}>Resume
        </a>
    </div>
    <button className="desktopMenuBtn" onClick={ () =>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    }}   >
        <img src={contactImg} alt="" className="desktopMenuImg" />Contact</button>
   </nav>
  )
}

export default Navbar;
