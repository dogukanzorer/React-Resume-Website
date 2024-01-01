import React from 'react'
import './footer.css'
import {BSLinkedin, BsLinkedin} from 'react-icons/bs'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
       <a href="#" className='footer__logo'>DOGUKAN ZORER</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about"></a>About</li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Project</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#"></a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.instagram.com/dogukanzorer/"> <BsLinkedin/></a>
          <a href="https://github.com/dogukanzorer" target='_blank'><FaGithub/></a>
          <a href="https://www.instagram.com/dogukanzorer/" target='_blank'><FaInstagram/></a>
        </div>


       <div className="footer__copyright">
        <small>&copy; DOGUKAN ZORER Tutorials. All rights reserved.</small>
       </div>


    </footer>
  )
}

export default Footer