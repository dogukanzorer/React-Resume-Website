import React , {useState} from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Typical from "react-typical"


const Header = () => {

  return (
    <header>
      <div className="container header__container">
      <h1 className="me-special">Jon Dogukan <a className='surname-special'>Zorer</a></h1>
      <div>
        <h5 className='text-light '>I'm <Typical steps={["a Frontend Developer", 1500, "a Backend Developer", 1500,"a Full Stack Developer",1500]} loop={Infinity} wrapper="span" />
      </h5>
      </div>

        
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