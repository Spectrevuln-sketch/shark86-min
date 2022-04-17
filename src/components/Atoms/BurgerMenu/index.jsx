import React from 'react'
import { scaleDown as Menu } from 'react-burger-menu'
import burger_style from './style.js'
import './style.css'
const BurgerMenu = ({ children }) => {
  const showSettings = (e) => {
    e.preventDefault();
  }
  return (
    <Menu styles={burger_style}>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
    </Menu>
  )
}

export default BurgerMenu