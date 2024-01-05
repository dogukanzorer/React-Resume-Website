import React from 'react'
import './portfolio.css'
import Diploma from "../../assets/diploma.jpg"
import BackButton from './BackButton';


const Portfolio = () => {
  return (
    <>
    <BackButton/>
    <section className='App-header' id="portfolio"> 
    
      <div className='d-flex justify-content-center '> 
      
      <div className="col-md-6 " style={{marginTop: '35px'}}>
        
        <img src={Diploma}></img>
        
      </div>
     
      </div>
    </section>
    
    </>
    
    
  )
}

export default Portfolio