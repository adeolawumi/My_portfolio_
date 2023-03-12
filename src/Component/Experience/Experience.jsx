import React from 'react'
import './experience.css'
import { BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h4>My Skills </h4>
      <h2>My Experience</h2>
      <div className="experienceContainer">
        <div className="experienceFrontEnd">
          <h3>Frontend Development</h3>
          <div className="experienceContent">
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetailsIcon' />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetailsIcon' />
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetailsIcon' />
              <div>
                <h4>JavaScript</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetailsIcon' />
              <div>
                <h4>Bootstrap</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetailsIcon' />
              <div>
                <h4>React</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experienceBackEnd">
          <h3>Backend Development</h3>        
          <div className="experienceContent">
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetailsIcon' />
              <div>
                <h4>Node JS</h4>
                <small>Beginner</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetailsIcon' />
              <div>
                <h4>MongoDB</h4>
                <small>Beginner</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetailsIcon' />
              <div>
                <h4>PHP</h4>
                <small>Beginner</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetailsIcon' />
              <div>
                <h4>MySQL</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>Python</h4>
                <small>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience