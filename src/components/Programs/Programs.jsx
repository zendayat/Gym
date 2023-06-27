import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'

const Programs = () => {
  return (
    <div>

        {/* heading */}
      <div className='programs_heading'>
        <span className='stroke-text'>WE GIVE THE BEST PROGRAMMES</span>
        <span>THERE COULD POSSIBLY BE</span>
      </div>

        <div className='program_categories'>
            {programsData.map((program) => (
                <div className='category'>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs
