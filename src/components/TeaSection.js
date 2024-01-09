import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Btton } from './Button';
import './TeaSection.css';


function TeaSection() {
  return (
    <div className = 'tea-container'>
      <video src={require('.//videos/video-2.mp4')} autoPlay loop></video>

      <h1>Welcome to BOB'S BOBA!</h1>
      <p>Have you tried our newest drink flavors?</p>
      <div className='tea-btns'>
        <Button className = 'btns' buttonStyle = 'btn--outline' buttonSize = 'btn--large'>GET STARTED
        </Button>
        <Btton className = 'btns' buttonStyle = 'btn--primary' buttonSize = 'btn--large'>ABOUT US
        </Btton>
      </div>
    </div>
  )
}

export default TeaSection
