import React from 'react'
import './portfolio.css'
import Image1 from '../../Assets/pexels-quintin-gellar-313782.jpg'
import Image2 from '../../Assets/pexels-bich-tran-669996.jpg'
import Image3 from '../../Assets/pexels-veeterzy-303383.jpg'
import Image4 from '../../Assets/pexels-hasan-albari-1229861.jpg'
import Image5 from '../../Assets/pexels-pixabay-531880.jpg'
import Image6 from '../../Assets/pexels-s-migaj-747964.jpg'

const data = [
  {
    id: 1,
    image: Image1,
    title: 'skyline pyru',
    github: 'https://github.com',
    demo: "https://www.pexels.com/search/website%20background/"
  },
  {
    id: 2,
    image: Image2,
    title: 'OG workspace',
    github: 'https://github.com',
    demo: "https://www.pexels.com/search/website%20background/"
  },
  {
    id: 3,
    image: Image3,
    title: 'OG workspace, the remix',
    github: 'https://github.com',
    demo: "https://www.pexels.com/search/website%20background/"
  },
  {
    id: 4,
    image: Image4,
    title: 'copycat leleyi',
    github: 'https://github.com',
    demo: "https://www.pexels.com/search/website%20background/"
  },
  {
    id: 5,
    image: Image5,
    title: 'Tell me, what do you see?',
    github: 'https://github.com',
    demo: "https://www.pexels.com/search/website%20background/"
  },
  {
    id: 6,
    image: Image6,
    title: 'Peace, my G, I see peace.',
    github: 'https://github.com',
    demo: "https://www.pexels.com/search/website%20background/"
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>
      <div className="container portfolioContainer">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolioItem">
              <div className="portfolioItemImage">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolioItemCta">              
                <a href={github} className="btn">Github</a>
                <a href={demo} className="btn btn-primary" target='_blank'>Live demo</a>
              </div>
            </article>)
        })}
      </div>
    </section>
  )
}

export default Portfolio