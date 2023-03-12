import React from 'react'
import './testimonial.css'
import Avatar1 from '../../Assets/pexels-becca-correia-3770254.jpg'
import Avatar2 from '../../Assets/istockphoto-1386479313-612x612.jpg'
import Avatar3 from '../../Assets/istockphoto-1355110818-612x612.jpg'
import Avatar4 from '../../Assets/istockphoto-1317804584-612x612.jpg'
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'


const data = [
  {
    Avatar: Avatar1,
    Name: 'Ipin Boy',
    Testimony:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quasi vero atque adipisci odit ex deleniti hic tempore deserunt rem illo repudiandae quidem, numquam illum consequuntur aliquam? Impedit, et asperiore'
  },
  {
    Avatar: Avatar2,
    Name: 'Jo Friday',
    Testimony:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quasi vero atque adipisci odit ex deleniti hic tempore deserunt rem illo repudiandae quidem, numquam illum consequuntur aliquam? Impedit, et asperiore'
  },
  {
    Avatar: Avatar3,
    Name: 'Koya Praise',
    Testimony:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quasi vero atque adipisci odit ex deleniti hic tempore deserunt rem illo repudiandae quidem, numquam illum consequuntur aliquam? Impedit, et asperiore'
  },
  {
    Avatar: Avatar4,
    Name: 'Waju Olanre',
    Testimony:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quasi vero atque adipisci odit ex deleniti hic tempore deserunt rem illo repudiandae quidem, numquam illum consequuntur aliquam? Impedit, et asperiore'
  }
]


const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h4>Review from clients</h4>
      <h2>Testimonials</h2>
      <Swiper className="mySwiper container testimonialsContainer" 
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation, Scrollbar, A11y]}>
        {
          data.map(({Avatar, Name, Testimony}, index)=> {
            return(              
                <SwiperSlide className="testimonial">
                <div className="clientAvatar">
                  <img src={Avatar}/> 
                </div>
                <h5 className='clientName'>{Name}</h5>
                <small className='clientReview'>{Testimony}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial