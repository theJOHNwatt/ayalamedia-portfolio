import React, {useState} from 'react'
import Lightbox from 'react-image-lightbox'

import image1 from '../assests/portfolio/image1.jpg'
import image2 from '../assests/portfolio/image2.jpg'
import image3 from '../assests/portfolio/image3.jpg'
import image4 from '../assests/portfolio/image4.jpg'
import image5 from '../assests/portfolio/image5.jpg'
import image6 from '../assests/portfolio/image6.jpg'
import image7 from '../assests/portfolio/image7.jpg'
import image8 from '../assests/portfolio/image8.jpg'
import image9 from '../assests/portfolio/image9.jpg'


function Portfolio() {

    const [lightbox, setLightbox] = useState({
        imagePopup: '',
        isOpen: false
    })
    
    const {imagePopup, isOpen} = lightbox

    return (

<div id='photography' className='portfolio-container'>
            <div className='portfolio-image'>
                <div className='portfolio-header'>
                <h1>PHOTOGRAPHY</h1>
                </div>
                <div className='portfolio-contents'>
                    <p>Bro ipsum dolor sit amet ollie beater first tracks twister gapers. Big ring bunny slope giblets 360. Bro reverse camber cruiser frozen chicken heads. Freshies frontside OTB chowder huckfest. Shreddin taco mitt rail bowl bail death cookies misty dirt chain ring rock-ectomy back country bomb gondy. Japan air backside schwag bowl death cookies.</p>
                    <div className='image-showcase'>
                        {/* <img onClick={() => setLightbox({isOpen: true, imagePopup: `${image1}`})} src={image1} alt='Showcase 1' />
                        <img onClick={() => setLightbox({isOpen: true, imagePopup: `${image2}`})} src={image2} alt='Showcase 2' />
                        <img onClick={() => setLightbox({isOpen: true, imagePopup: `${image3}`})} src={image3} alt='Showcase 3' />
                        <img onClick={() => setLightbox({isOpen: true, imagePopup: `${image4}`})} src={image4} alt='Showcase 4' />
                        <img onClick={() => setLightbox({isOpen: true, imagePopup: `${image5}`})} src={image5} alt='Showcase 5' />
                        <img onClick={() => setLightbox({isOpen: true, imagePopup: `${image6}`})} src={image6} alt='Showcase 6' />
                        <img onClick={() => setLightbox({isOpen: true, imagePopup: `${image7}`})} src={image7} alt='Showcase 7' />
                        <img onClick={() => setLightbox({isOpen: true, imagePopup: `${image8}`})} src={image8} alt='Showcase 8' />
                        <img onClick={() => setLightbox({isOpen: true, imagePopup: `${image9}`})} src={image9} alt='Showcase 9' />

                        {
                            isOpen && (
                                <Lightbox
                                    mainSrc={imagePopup}
                                    onCloseRequest={() => setLightbox({...lightbox, isOpen: false})}
                                />
                            )
                        } */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio