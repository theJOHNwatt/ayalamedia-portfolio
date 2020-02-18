import React from 'react'

import AliceCarousel from 'react-alice-carousel';

import './alice-carousel/alice-carousel.scss'
function Film() {


    return (
        <div className='film-container'>
            <div id='film' className='film-image'>
                <div className='film-header'>
                <h1>FILM</h1>
                </div>
            </div>
            <div  className='film-contents'>
                {/* <p>
                    Ayala Media sets the bar for the highest quality in video production and editing. Checkout our <a href='https://www.youtube.com/user/boomshakalaka33'>YouTube</a> page for more content.
                </p> */}
                <div className='videos-container'>
                    <AliceCarousel>
                      
                        <iframe title='vid2' className="vid" width="100%"  height="550" src="https://www.youtube.com/embed/-ZrYWZ3cWMo" />
                       
                        <iframe title='vid2' className="vid" width="100%" height="550" src="https://www.youtube.com/embed/Aqztfey9Plc" />
                       
                        <iframe title='vid3' className="vid" width="100%" height="550" src="https://www.youtube.com/embed/FDRNNt6cgqg" />
                       
                        <iframe title='vid4' className="vid" width="100%" height="550" src="https://www.youtube.com/embed/qbFIrnYy3P0" />
                       
                    </AliceCarousel>
                </div>
            </div>

        </div>
    )
}

export default Film