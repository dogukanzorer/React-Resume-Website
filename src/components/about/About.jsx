import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { FaUserGraduate } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";




const About = () => {
  return (
    <section id='about'> 
    <h5> Get To Know</h5>
    <h2> About Me </h2>

    <div className='container about__container'>
      <div className='about__me'>
       <div className="about__me-image">
        <img src={ME} alt= "About Image" />
       </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaUserGraduate className='about__icon'/>
            <h5>Software Engineering</h5>
            <small>4+ Years</small>
          </article>
          <article className='about__card'>
            <FaCode className='about__icon'/>
            <h5>Working</h5>
            <small>Full stack</small>
          </article>
          <article className='about__card'>
            <FaFolderOpen className='about__icon'/>
            <h5>Projects</h5>
            <small>6+ working on different projects</small>
            
          </article>
        </div>
        <br/>
        <p>
            Greetings! - Jon Dogukan Zorer,<br/>
            I was born in 1998 in New York, USA, and I am a software engineer. I completed my Bachelor's degree in Software Engineering at Uskudar University in September 2022. 
            Throughout my education, I focused on educating myself in web-based and other application development projects.
            I have a high level of social skills, am compatible with team collaborations, and possess skills in planning and time management. 
            I am analytical and algorithmic in my thinking, quick to grasp tasks, open to learning, ambitious, and enjoy working in my field.
          </p>
          <br/>
          <a href='#contact' className='btn btn-primary-purple'> Contact To Me</a>
      </div>
    </div>
    
     </section>
  )
}

export default About