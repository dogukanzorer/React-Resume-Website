import React , {useState} from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {

  return (
    <header>
      <div className="container header__container">
        <h1>Jon Dogukan Zorer</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img className='logo' src={ME} alt='me'></img>
        </div>
        <div>
        <a href='#contact' className='scroll__down'> Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header