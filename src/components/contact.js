import React from 'react'
import Form from './form'

function Contact() {


    return (
        <div  className='contact-container'> 
            <div id='contact' className='contact-image'>
                <div className='contact-header'>
                    <h1>CONTACT</h1>
                </div>
                
            </div>  
            <div className='contact-contents'>
                    <Form />
            </div>
        </div>
        
    )
}

export default Contact