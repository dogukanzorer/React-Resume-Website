import React from 'react'
import './experience.css'
import { PiSealCheckBold } from "react-icons/pi";



const Experience = () => {
  return (
    <section id='experience'> 
    
    <h5> What Skills I Have </h5>
    <h2>Technical Skills</h2>

    <div className="container experience__container">
      <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <PiSealCheckBold className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <PiSealCheckBold className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <PiSealCheckBold className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <PiSealCheckBold className='experience__details-icon'/>
            <div>
            <h4>Boostrap</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <PiSealCheckBold className='experience__details-icon'/>
            <div>
            <h4>Tailwind</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <PiSealCheckBold className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <PiSealCheckBold className='experience__details-icon'/>
            <div>
            <h4>Angular</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
      </div>

              {/* end of the frontend */ }

      <div className="experience_backend"> 
      <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <PiSealCheckBold className='experience__details-icon'/>
            <div>
            <h4>C++</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <PiSealCheckBold className='experience__details-icon'/>
            <div>
            <h4>C#</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <PiSealCheckBold className='experience__details-icon'/>
            <div>
            <h4>Java</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <PiSealCheckBold className='experience__details-icon'/>
            <div>
            <h4>Node Js</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <PiSealCheckBold className='experience__details-icon'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <PiSealCheckBold className='experience__details-icon'/>
            <div>
            <h4>PostgreSql </h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <PiSealCheckBold className='experience__details-icon' />
            <div>
            <h4>MySql</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article> 
        </div>
        
      </div>
    </div>
    
     </section>
  )
}

export default Experience