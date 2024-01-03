import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
        <header className='row'>
        <h1 className='logo'>Logo</h1>
        <nav>
            <ul className='main_nav row'>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/cars'}>Cars</NavLink></li>
                <li><NavLink to={'/branch'}>Branches</NavLink></li>
                <li><NavLink to={'/user'}>Workers</NavLink></li>
                <li><NavLink to={'/available-branch'}>Avaliable branch</NavLink></li>
            </ul>
        </nav>
    </header>
    )
  }
}

export default Header