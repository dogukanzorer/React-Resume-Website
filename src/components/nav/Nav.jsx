import React from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { TbHotelService } from "react-icons/tb";
import { GrContact } from "react-icons/gr";
import { GiDiploma } from "react-icons/gi";
import {useState} from 'react';
import { Link, Routes ,Route} from 'react-router-dom';
import Portfolio from '../portfolio/Portfolio';

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoHomeOutline/></a>
      <a href="#about" onClick={() => setActiveNav('#about') } className={activeNav === '#about' ? 'active' : ''}><FaRegUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience') } className={activeNav === '#experience' ? 'active' : ''}><IoMdBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services') } className={activeNav === '#services' ? 'active' : ''}><TbHotelService/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact') } className={activeNav === '#contact' ? 'active' : ''}><GrContact/></a>
      

    </nav>
  )
}

export default Nav