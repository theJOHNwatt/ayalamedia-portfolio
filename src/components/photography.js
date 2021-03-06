import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";

import image1 from '../assests/portfolio/image1.jpg'
import image2 from '../assests/portfolio/image2.jpg'
import image3 from '../assests/portfolio/image3.jpg'
import image4 from '../assests/portfolio/image4.jpg'
import image5 from '../assests/portfolio/image5.jpg'
import image6 from '../assests/portfolio/image6.jpg'
import image7 from '../assests/portfolio/image7.jpg'
import image8 from '../assests/portfolio/image8.jpg'
import image9 from '../assests/portfolio/image9.jpg'

function Photography() {




    return (
        <div  className='photography-container'> 
            <div id='photography' className='photography-image'>
                <div className='photography-header'>
                    <h1>PHOTOGRAPHY</h1>
                </div>
                
            </div>  
            <div className='photography-contents'>
                    <p>Bro ipsum dolor sit amet reverse camber park rat air poaching skid lid, north shore schwag air free ride ski bum ollie frozen chicken heads. Taco DH wheelie drop smear greasy frozen chicken heads avie bomb hole gondy hurl carcass tele. Wheels bro grab back country couloir air. Shreddin ripper dope huckfest afterbang brain bucket fatty ski bum punter gaper hurl carcass flow face shots greasy cork. McTwist lid yard sale washboard shred. Free ride derailleur rail, road rash lid smear huck gorby. White room wheelie booter, air sharkbite schwag cornice first tracks air gapers freshies caballerial endo.</p>
                    <SRLWrapper> 
                        <div className='image-showcase'>
                            <div className='row-1'>
                                <img src={image1} alt='img1' />
                                <img src={image2} alt='img2' />
                                <img src={image3} alt='img3' />
                            </div>
                            <div className='row-2'>
                                <img src={image4} alt='img4' />
                                <img src={image5} alt='img5' />
                                <img src={image6} alt='img6' />
                            </div>
                            <div className='row-3'>
                                <img src={image7} alt='img7' />
                                <img src={image8} alt='img8' />
                                <img src={image9} alt='img9' />
                            </div>
                        </div>
                    </SRLWrapper>
            </div>
        </div>
        
    )
}

export default Photography