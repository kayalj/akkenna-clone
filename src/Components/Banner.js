import React from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button';
import call from '../Images/Card-1-Call-Icon.svg';
import mail from '../Images/Card-1-Mail-Icon.svg';
import more from '../Images/Card-1-More-Icon.svg';


function Banner() {
  return (
    <div className='Home'>
        <div className='banner'>
            <div className='banner-hd'>
                <h6>Web Development</h6>
                <h2>Making Waves With<br/>Generative AI Services</h2>
                <p>In artificial intelligence, there are limitless opportunities for innovation, efficiency, and<br/> greatness to be redefined, Your path to a new direction starts here.</p>
                <Button className='banner-hd-btn'>Contact Now</Button>
            </div>
        </div>

        <div className='banner-card'>
            <div className='banner-card-1'>
                <p>Meet Our</p>
                <h6>AI Consultant</h6>
                <div className='banner-card-1-icons'>
                    <img src={call}></img>
                    <img src={mail}></img>
                    <img src={more}></img>
                </div>
            </div>
            <div className='banner-card-2'>
                <h5>Industries We Serve</h5>
                <p>Create your B2B custom audience based on their fields.</p>
            </div>
            <div className='banner-card-3'>
                <h6>Contact Results</h6>
                <Button className='banner-card-3-btn'>Who We Are</Button>
            </div>
            <div className='banner-card-4'>
                <h4>Latest<br/>Technology Using</h4>
            </div>
            <div className='banner-card-5'>
                <h3>Customized AI Chatbot</h3>
            </div>
        </div>
    </div>    
  )
}

export default Banner
