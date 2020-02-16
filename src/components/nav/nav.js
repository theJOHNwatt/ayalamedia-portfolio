import React from 'react'
import {Link}  from 'react-router-dom'
import './nav.scss'

import logo from '../../assests/ayalamedia-logo.png'
import motofin from '../../assests/motofinco-logo.png'

function Nav({selected}) {

    

    return (
        
        <div className='nav-bar' >
            <nav id='navbar'>
                <div className='logo'><img src={logo} to='https://www.google.com' alt='Ayala Media Logo'/></div>
                    <Link activeClass='selected' to='/#home'>HOME</Link>
                    <Link activeClass='selected' to='#about'>ABOUT</Link>
                    <Link activeClass='selected' to='#film'>FILM</Link>
                    <Link activeClass='selected' to='#portfolio'>PORTFOLIO</Link>
                    <Link activeClass='selected' to='#motofin'><img className='motofin' src={motofin} alt='MotoFinCo Logo'/></Link>
                    <Link activeClass='selected' to='/#contact'>CONTACT</Link>

                    
            </nav>
        </div>
    )
}

export default Nav