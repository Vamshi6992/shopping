import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Contact.scss';


const Contact = () => {
  return (
    <div className='contact'>
        <div className='wrapper'>
            <span>BE IN TOUCH WITH US:</span>
            <div className='input'>
                <input type='text' placeholder='Enter your Email'/>
                <button>JOIN US</button>
            </div>
            <div className='icons'>
                <FacebookIcon/>
                <InstagramIcon/>
                <WhatsAppIcon/>
            </div>

        </div>
      
    </div>
  )
}

export default Contact
