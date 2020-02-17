import React from 'react'

import motoimage from '../assests/motoimage1.jpg'

function Film() {


    return (
        <div className='film-container'>
            <div className='film-image'>
                {/* <img src={motoimage} alt='film-header' /> */}
            </div>
            <div id='film' className='film-contents'>
                <div className='film-header'>
                    <h1>FILM</h1>
                </div>
                <p>
                    Ayala Media sets the bar for the highest quality in video production and editing. Checkout our <a href='https://www.youtube.com/user/boomshakalaka33'>YouTube</a> page for more content.
                </p>
                <div className='videos-container'>
                <iframe width="30%" height="300" src="https://www.youtube.com/embed/-ZrYWZ3cWMo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="30%" height="300" src="https://www.youtube.com/embed/Aqztfey9Plc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="30%" height="300" src="https://www.youtube.com/embed/FDRNNt6cgqg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

        </div>
    )
}

export default Film