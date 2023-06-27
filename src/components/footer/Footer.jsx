import React from 'react'
import './Footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer_body'>
      <div className='line'>vv</div>
      <div className='footer_contents'>
        <div className='footer_socials'>
          <div className='box'><a href='#'><BsInstagram/></a></div>
          <div className='box'><a href='#'><BsFacebook/></a></div>
          <div className='box'><a href='#'><BsTwitter/></a></div>
        </div>
        <span>&copy;Copyright2023. Created by ZenCraizee</span>
        <span>Inspired by ZAINKEEPSCODE</span>
      </div>
    </div>
  )
}

export default Footer
