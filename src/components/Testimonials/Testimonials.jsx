import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination} from 'swiper';
import { testimonialsData } from '../../data/testimonialsData';

import './Testimonials.css'
import padVid from '../../assets/vid1.mp4'
import img2 from '../../assets/image5.jpeg'
import img4 from '../../assets/image7.jpeg'
// import timg1 from '../../assets/t-image1.png'
// import timg2 from '../../assets/t-image2.jpg'
// import timg3 from '../../assets/t-image3.jpg'
// import timg4 from '../../assets/t-image4.png'
// import timg5 from '../../assets/t-image5.png'

const Testimonials = () => {
  return (
    <div>
        <div className='testimonials_heading'>
            <span className='stroke-text'>WHY US?</span>
            <span>Hear what our clients have to say</span>
        </div>
        <div className='testimonials_container'>
            <div className='gallery'>
                <video className='ad_video' autoPlay muted loop>
                    <source src={padVid} type="video/mp4" />
                </video>
                <img src={img2} alt=''/>
                <img src={img4} alt=''/>
            </div>
            <div className='Testimonials'>
                <Swiper modules={[Pagination]} spaceBetween={40} slidesPerView={1} pagination={{ clickable: true }} onSwiper={(swiper) => console.log(swiper)} onSlideChange={() => console.log('slide change')} className="mySwiper">
                {
          testimonialsData.map((program) => {
            return(
              <SwiperSlide>
                <div className='client__avatar'>
                  <img src={program.image} alt='Avatar 1'/>
                </div>
                <h5 className='client__name'>{program.name}</h5>
                <small className='client__review'>{program.review}</small>
              </SwiperSlide>
            )
          })
        }
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
