import React, {useState} from 'react'
import './Nav.css'
// import {ImMenu3} from 'react-icons/im'


const Nav = () => {

    const[burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const[menu_class, setMenuClass] = useState("menu hidden")
    const[isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
      if (!isMenuClicked){
        setBurgerClass("burger-bar clicked")
        setMenuClass("menu visible")
      }
      else{
        setBurgerClass("burger-bar clicked")
        setMenuClass("menu hidden")
      }
      setIsMenuClicked(!isMenuClicked)
    }


  return (
    <div className='navbar'>
      <nav className='nav'>
        <div className='burger_menu' onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
        </div>
      </nav>

      <div className={menu_class}></div>
    </div>
  )
}

export default Nav
