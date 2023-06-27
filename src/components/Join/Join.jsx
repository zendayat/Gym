import React from 'react'
import './Join.css'

import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Join = () => {
  return (
    <div>
        <div className='Join_heading'>
            <span>The journey of a thousand miles starts with</span>
            <span className='stroke-text'>JOINING US</span>
        </div>
        <div>
          <div className='form_container'>
            <form>
              <div className='heading'>
                <span className='stroke-text head'>JOIN US</span>
              </div>
              <input type='email' placeholder='Enter your Email' required/>
              <input type='text' placeholder='Enter your Name' required/>
              <input type='text' placeholder='Enter your Phone Number' required/>
              <div className='dropdown'>
                <label for="dropdown">Select Your Gender:</label>
                <select id="dropdown" name="Gender">
                  <option value="option1">Male</option>
                  <option value="option2">Female</option>
                </select>
              </div>
              <div className='dropdown'>
                <label for="dropdown">Select Your Plan:</label>
                <select id="dropdown" name="Plan">
                  <option value="option1">Basic Plan</option>
                  <option value="option2">Premium Plan</option>
                  <option value="option3">Pro Plan</option>
                </select>
              </div>
              <button type='submit' className='btn submit'>SUBMIT</button>
              <div className='socials'>
                <div className='box'><a href='#'><BsInstagram/></a></div>
                <div className='box'><a href='#'><BsFacebook/></a></div>
                <div className='box'><a href='#'><BsTwitter/></a></div>
              </div>
              <div className='under_socials'></div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Join
