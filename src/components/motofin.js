import React from 'react'

import motofins from '../assests/motofin-image.jpg'


function Motofin() {


    return (
        <div  className='motofin-container'> 
            <div id='motofin' className='motofin-image'>
                <div className='motofin-header'>
                    <h1>MOTOFIN</h1>
                </div>
                
            </div>  
            <div className='motofin-contents'>
                    <h1>Universal Helmet Fins</h1>
                    <p>Devoloped by Ayala Media, our patent pending design allows the fin to bend and conform to almost any helmet. Not only is it pliable but it is also crushable allowing it to not interfere with helmet safety. We use the same 3M technology as todays top pov action cameras to make applying the fin easy while maintaining a strong bond. Add some style to your helmet and shop MotoFinco!</p>
                    <img src={motofins} src={motofins} />
                    <button><a href='https://www.motofinco.com' target="_blank">Explore MotoFin</a></button>
            </div>
        </div>
        
    )
}

export default Motofin