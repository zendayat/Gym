import React from 'react'
import './Perks.css'

import health from '../../assets/heartHealth.svg'

const Perks = () => {
  return (
    <div>
      <div className='perks_body'>
        <span className='stroke-text'>PERKS JUST FOR YOU</span>
        <div className='equals_line'></div>
        <div className='provinsions_body'>
          <div className='provinsions'>
            <img src={health} alt=''/>
            <span>Health consultation</span>
          </div>
          <div className='provinsions'>
            <img src={health} alt=''/>
            <span>Diet monitoring</span>
          </div>
          <div className='provinsions'>
            <img src={health} alt=''/>
            <span>Private Coaching</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perks
