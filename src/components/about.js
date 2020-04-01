import React from 'react'

import youtube from '../assests/youtube.png'
import facebook from '../assests/facebook.png'
import instagram from '../assests/instagram.png'

function About() {


    return (
        <div  className='about-container'> 
            <div id='about' className='about-image'>
                <div className='about-header'>
                    <h1>ABOUT</h1>
                </div>
                
            </div>  
            <div className='about-contents'>
                    <p>Bro ipsum dolor sit amet reverse camber park rat air poaching skid lid, north shore schwag air free ride ski bum ollie frozen chicken heads. Taco DH wheelie drop smear greasy frozen chicken heads avie bomb hole gondy hurl carcass tele. Wheels bro grab back country couloir air. Shreddin ripper dope huckfest afterbang brain bucket fatty ski bum punter gaper hurl carcass flow face shots greasy cork. McTwist lid yard sale washboard shred. Free ride derailleur rail, road rash lid smear huck gorby. White room wheelie booter, air sharkbite schwag cornice first tracks air gapers freshies caballerial endo.</p>
                    <div className='social'>
                        <div className='social-icons'>
                            <a href='https://www.youtube.com/user/boomshakalaka33'><img src={youtube} alt='YouTube Logo' /></a>
                            <a href='https://www.facebook.com/gavenayala'><img src={facebook} alt='Facebook Logo' /></a>
                            <a href='https://www.instagram.com/ayalamedia/'><img src={instagram} alt='Instagram Logo' /></a>
                        </div>
                        <h1>Stay connected by following use on social media!</h1>
                    </div>
            </div>
        </div>
        
    )
}

export default About