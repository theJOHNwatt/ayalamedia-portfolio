import React from 'react'

import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
function Film() {


    return (
        <div className='film-container'>
            <div id='film' className='film-image'>
                <div className='film-header'>
                <h1>FILM</h1>
                </div>
            </div>
            <div  className='film-contents'>
                <p>
                    Ayala Media sets the bar for the highest quality in video production and editing. Checkout our <a href='https://www.youtube.com/user/boomshakalaka33'>YouTube</a> page for more content.
                </p>
                <div className='videos-container'>
                    <Carousel interval={null} touch={true} fade={true} controls={true} wrap={true}>
                        
                    <Carousel.Item>
                        <iframe title='vid2' className="vid" width="100%"  height="550" src="https://www.youtube.com/embed/-ZrYWZ3cWMo?controls=1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe title='vid2' className="vid" width="100%" height="550" src="https://www.youtube.com/embed/Aqztfey9Plc?controls=1" />
                    </Carousel.Item>  
                    <Carousel.Item>
                        <iframe title='vid3' className="vid" width="100%" height="550" src="https://www.youtube.com/embed/FDRNNt6cgqg?controls=1" />
                    </Carousel.Item>  
                    <Carousel.Item> 
                        <iframe title='vid4' className="vid" width="100%" height="550" src="https://www.youtube.com/embed/qbFIrnYy3P0" />
                    </Carousel.Item>   
                    </Carousel>
                </div>
            </div>

        </div>
    )
}

export default Film