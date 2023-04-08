import React from "react"
import logo from '/public/images/airbnb-logo.png'


export default function Header() {
  return (
    <nav className="nav">
      <img className="nav__logo" src={logo} alt="airbnb Logo"></img>
    </nav>
  )
}