import React from 'react'

import facebook from '../assests/facebook.png'
import youtube from '../assests/youtube.png'
import instagram from '../assests/instagram.png'

function About() {


    return (
        <div>
            <div id='about' className='socials-contents'>
                <div className='socials-header'>
                    <h1>SOCIAL MEDIA</h1>
                </div>
                    <div  className='social-icons'>
                        <a href='https://www.youtube.com/user/boomshakalaka33' target="_blank"><img src={youtube} alt='Youtube' /></a>
                        <a href='https://www.facebook.com/gavenayala/' target="_blank"><img src={facebook} alt='Facebook'/></a>
                        <a href='https://www.instagram.com/ayalamedia/' target="_blank"><img src={instagram} alt='Instagram'/></a>
                    </div>
                    <h2>Stay up to date on conntent by following us on social media!</h2>
                </div>
                <div  className='about-container'>   
                <div className='about-contents'>
                    <div className='heading'><h1>ABOUT</h1></div>
                    <p>Bro ipsum dolor sit amet reverse camber park rat air poaching skid lid, north shore schwag air free ride ski bum ollie frozen chicken heads. Taco DH wheelie drop smear greasy frozen chicken heads avie bomb hole gondy hurl carcass tele. Wheels bro grab back country couloir air. Shreddin ripper dope huckfest afterbang brain bucket fatty ski bum punter gaper hurl carcass flow face shots greasy cork. McTwist lid yard sale washboard shred. Free ride derailleur rail, road rash lid smear huck gorby. White room wheelie booter, air sharkbite schwag cornice first tracks air gapers freshies caballerial endo.</p>

                    <p>Schwag ripper death cookies cork. Presta huck berm rock-ectomy bail McTwist hammer ski bum dust on crust. Misty euro twin tip, ski bum yard sale chain ring 180 hardtail huck caballerial punter shreddin fatty glades free ride. Taco mitt gaper dust on crust, flow air hammerhead laps.</p>
                </div>
            </div>
        </div>
    )
}

export default About