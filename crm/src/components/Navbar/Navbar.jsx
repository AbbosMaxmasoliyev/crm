import React from 'react'
import "./Navbar.scss"
import { FaHeadphonesAlt } from "react-icons/fa"
import { SearchForm } from '../Form/FormInput'
import { Profile } from '../Profile/Profile'
import Cart from '../Cart/Cart'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container navbar_block'>
        <div className='navbar_logo'>
          <img src={ require( "../../images/back/logo.png" ) } />
        </div>
        <SearchForm />

        <div className='navbar_phone'>
          <span>Call Us Now</span>
          <a href='tel:+0115827918'>
            <FaHeadphonesAlt style={{width:"19px"}}/>
            +011 5827918
          </a>
        </div>
        <Profile />
        <Cart />
      </div>

    </div>
  )
}

export default Navbar