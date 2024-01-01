import React from 'react'
import {BSLinkedin, BsLinkedin} from 'react-icons/bs'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";





const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/dogukanzorer/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/dogukanzorer" target='_blank'><FaGithub/></a>
        <a href="https://www.instagram.com/dogukanzorer/" target='_blank'><FaInstagram/></a>
        

    </div>
  )
}

export default HeaderSocials