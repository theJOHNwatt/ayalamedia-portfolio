import React from 'react'

import './nav.scss'

import logo from '../../assests/ayalamedia-logo.png'
import motofin from '../../assests/motofinco-logo.png'

function Nav({selected}) {

    

    return (
        
        <div className='nav-bar' >
            <nav id='navbar'>
                <div className='logo'><img src={logo} to='https://www.google.com' alt='Ayala Media Logo'/></div>
                    <a href='#home'>HOME</a>
                    <a href='#about'>ABOUT</a>
                    <a href='#film'>FILM</a>
                    <a href='#photography'>PHOTOGRAPHY</a>
                    <a href='#motofin'><img className='motofin' src={motofin} alt='MotoFinCo Logo'/></a>
                    <a href='#contact'>CONTACT</a>

                    
            </nav>
        </div>
    )
}

export default Nav