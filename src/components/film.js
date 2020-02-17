import React from 'react'

function Film() {


    return (
        <div className='film-container'>
            <div id='film' className='film-image'>
                {/* <img src={motoimage} alt='film-header' /> */}
                <div className='film-header'>
                <h1>FILM</h1>
                </div>
            </div>
            <div  className='film-contents'>
                
                    
                
                <p>
                    Ayala Media sets the bar for the highest quality in video production and editing. Checkout our <a href='https://www.youtube.com/user/boomshakalaka33'>YouTube</a> page for more content.
                </p>
                <div className='videos-container'>
                    <div className='row1'>
                        <iframe title='film-1' width="30%" height="300" src="https://www.youtube.com/embed/-ZrYWZ3cWMo" frameborder="0" allow="accelerometer; autoplay;encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe title='film-2'  width="30%" height="300" src="https://www.youtube.com/embed/Aqztfey9Plc" frameborder="0" allow="accelerometer; autoplay;encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe title='film-3'  width="30%" height="300" src="https://www.youtube.com/embed/FDRNNt6cgqg" frameborder="0" allow="accelerometer; autoplay;encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='row2'>
                        <iframe title='film-1' width="30%" height="300" src="https://www.youtube.com/embed/-ZrYWZ3cWMo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe title='film-2'  width="30%" height="300" src="https://www.youtube.com/embed/Aqztfey9Plc" frameborder="0" allow="accelerometer; autoplay;encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe title='film-3'  width="30%" height="300" src="https://www.youtube.com/embed/FDRNNt6cgqg" frameborder="0" allow="accelerometer; autoplay;encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Film