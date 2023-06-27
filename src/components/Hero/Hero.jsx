import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import NumberCounter from 'number-counter'

import hero_image from '../../assets/hero_image1.png'
import beast from '../../assets/heart4.jpeg'

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='hero-l'>
        <Header/>
        
        
        {/* the best ad */}


        <div className='the-best-ad'>
          <div></div>
          <span>GETTING YOU COMBAT READY</span>
        </div>
        
        
        {/* heading */}

        <div className='hero-text'>
          <div className='stroke-text'>
            <span>TRAIN</span>
            <span> & TAME</span>
          </div>
          <div>THE BEAST INSIDE.</div>
          <div>
            <span>Let us help you to nurture and train the flame that burns inside of you. Know your true power.</span>
          </div>
        </div>

        {/* figures */}

        <div className='figures'>
          <div>
            <span><NumberCounter end={56} start={35} delay='4'/></span>
            <span>Expert coaches</span>
          </div>
          <div>
            <span><NumberCounter end={250} start={220} delay='4' preFix="+"/></span>
            <span>Members joined</span>
          </div>
          <div>
            <span><NumberCounter end={20} start={0} delay='4' preFix="+"/></span>
            <span>Annual programmes</span>
          </div>
        </div>
        
        {/* buttons */}

        <div className='hero-btns'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>
      <div className='hero-r'>
        <button className='btn'>Join Now</button>

        <div className='beast_mode'>
          <img src={beast} alt='' />
          <span className='stroke-text'>BEAST</span>
          <span>MODE</span>
        </div>
        <img src={hero_image} alt='' className='hero_image'/>
      </div>
    </div>
  )
}

export default Hero
