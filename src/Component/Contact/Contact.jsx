import React, { useRef } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import './contact.css'
import emailjs from 'emailjs-com'

const Contact= ()=> {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dko035k', 'template_nmu689a', form.current, 'RdOOTpEFUuXUeXyFZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return(
    <section id="contact"> 
      <h4> Get In Touch</h4>
      <h2>Contact Me</h2>
      <div className="container contactContainer">
        <div className="contactOptions">
          <article className="contactOption">
            <MdOutlineEmail className='contactOptionIcon'/>
            <h4>Email</h4>
            <h5>dumayegator@gmail.com</h5>
            <a href="mailto:seyipins@gmail.com" target='_blank'>Send a message</a> 
          </article>
          <article className="contactOption">
            <RiMessengerLine className='contactOptionIcon'/>
            <h4>Messenger</h4>
            <h5>Oluseyi</h5>
            <a href="https://m.me/oluseyi.ipinmoroti" target='_blank'>Send a message</a> 
          </article>
          <article className="contactOption">
            <BsWhatsapp className='contactOptionIcon'/>
            <h4>WhatsApp</h4>
            <h5>+234 812 505 8482</h5>
            <a href="https://wa.link/tt0f6t" target='_blank'>Send a message</a> 
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="name" rows='7' placeholder='Your Message' required></textarea>
          <button type="submit" value='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div> 
    </section>
    )          
}

export default Contact