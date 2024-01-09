import React from 'react';
import '../App.css';
import { Button } from './Button';
import './TeaSection.css';
import Video from '../videos/video-2.mp4';

function TeaSection() {
  return (
    <div className = 'tea-container'>
      <video src={Video} autoPlay loop muted/>
      <h1>Welcome to Bob's Boba!</h1>
      <p>Have you tried our newest drink flavors?</p>
      <div className='tea-btns'>
        <Button className = 'btns' buttonStyle = 'btn--outline' buttonSize = 'btn--large'>GET STARTED
        </Button>
        <Button className = 'btns' buttonStyle = 'btn--primary' buttonSize = 'btn--large'>ABOUT US
        </Button>
      </div>
    </div>
  )
}

export default TeaSection
