import React from 'react'
import './about.css'
import Me from '../../Assets/pexels-photo-10013038.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
// import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h4>Get to know</h4>
      <h2>About me</h2>
      <div className="container aboutContainer">
        <div className="aboutMe">
          <div className="aboutMeImage">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="aboutContent">
          <div className="aboutCards">
            <article className="aboutCard">  
              <FaAward className='aboutCardIcon' />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            <article className="aboutCard">
              <FiUsers className='aboutCardIcon'/>
              <h5>Client</h5>
              <small>300+ clients worldwide</small>
            </article>
            <article className="aboutCard">
              {/* <VscFolderLibrary className='aboutCardIcon'/> */}
              <h5>Projects</h5>
              <small>80+ completed projects</small>
            </article>
          </div>        
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis ducimus ex, quis numquam, autem sed expedita molestias
            enim omnis blanditiis reprehenderit velit, aliquid porro quo neque ad sequi doloremque veniam.</p>
            <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About