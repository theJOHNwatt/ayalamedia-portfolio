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
                Bro ipsum dolor sit amet air granny gear first tracks gondy. Poaching death cookies sharkbite, chain ring gapers frozen chicken heads japan air glades spin backside carve 360 chain suck. Taco nose press wheels, face shots hot dogging sucker hole hardtail line poaching. Mute death cookies stoked bowl road rash bump brain bucket stunt punter epic scream greasy first tracks shuttle whip. 
                </p>
                <div className='videos-container'>
                <iframe width="33%" height="300" src="https://www.youtube.com/embed/-ZrYWZ3cWMo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="33%" height="300" src="https://www.youtube.com/embed/Aqztfey9Plc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="33%" height="300" src="https://www.youtube.com/embed/-ZrYWZ3cWMo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
                </div>
            </div>

        </div>
    )
}

export default Film