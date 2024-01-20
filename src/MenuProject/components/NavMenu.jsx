import React from 'react'
import { Navbar, NavbarBrand,  } from 'reactstrap'
import { FaShoppingBasket } from "react-icons/fa";

export default function NavMenu({setIsCardOpen, isCardOpen}) {
  return (
    <Navbar
    className="my-2"
    color="dark"
    dark
  >
    <NavbarBrand href="/">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHAAtB5HyTh0AdgePLrzkTVXbSMPHKBvG29w&usqp=CAU"
          alt='logo'
        style={{
          height: 60,
          width: 90
        }}
      />
      The Food Boutique Restaurant 
    </NavbarBrand>
    <FaShoppingBasket onClick={()=>setIsCardOpen(!isCardOpen)} style={{color: "white", fontSize: "30px"}}/>
  </Navbar>
  )
}
