import React from 'react'
import './contact.css'
import { HiOutlineMail } from "react-icons/hi";
import { LiaWhatsapp } from "react-icons/lia";
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_64fxwo7', 'template_kkglng9', form.current, 'N5STMF7Uownr0ogoj')
      
    e.target.reset()
  };


  return (
    <section id='contact'> 
    
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
         <artical className="contact__option">
          <HiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>jzorer98@hotmail.com</h5>
           <a href="mailto:jzorer98@hotmail.com" target='_blank'>Send a message</a>
         </artical>
         <article className='contact__option'>
          <LiaWhatsapp/>
          <h4>WhatsApp</h4>
          <h5>+1 (727) 657 09 17</h5>
          <a href='https://api.whatsapp.com/send?phone=+17276570917' target='_blank'> Send a message</a>
         </article>
         
      </div>
             {/* End Of Contact*/}
       <form ref={form} onSubmit={sendEmail}>
        <input type="text"  name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Mail' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary-purple button'>Send Message</button>
       </form>
    </div>
     </section>
  )
}

export default Contact