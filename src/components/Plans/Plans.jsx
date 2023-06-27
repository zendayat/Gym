import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'

import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className='plans_container'>
      <div className='plans_header'>
        <span className='stroke-text'>START</span>
        <span> YOUR JOURNEY </span>
        <span className='stroke-text'>WITH US</span>
      </div>

      <div className='plans'>
        {
            plansData.map((plan, i) => (
                <div className='plan' key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className='features'>
                        {plan.features.map((feature, i) => (
                            <div className='feature'>
                                <img src={whiteTick} alt=''/>
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <button className='btn'>Join Now</button>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Plans
