import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Arrow from '../Images/Showcase-Btn-Arrow.svg';
import Hdcont1 from '../Images/Showcase-NetGen.svg';
import Hdcont2 from '../Images/Showcase-IntegratMethd.svg';
import Hdcont3 from '../Images/Showcase-ProgresCreat.svg';
import Hdcont4 from '../Images/Showcase-CandidColbrate.svg';

function Showcase() {
  const [selectedDiv, setSelectedDiv] = useState('1'); // Set initial state to '1'

  const handleShowSingle = (contentId) => {
    setSelectedDiv(contentId);
  };

  return (
    <div className='showcase-bg'>
      <div className='container'>
        <div className='showcase-main'>
          <div className='showcase-cont-main'>
            <div className='showcase-main-hd'>
              <h3>What Makes Akkenna<br/>the Best Option for<br/>Generative AI Services?</h3>
              <p>In artificial intelligence, there are limitless opportunities for innovation, efficiency, and greatness to be redefined, Your path to a new direction starts here.</p>
              <Button className='showcase-btn-arrow'>
                Get Started
                <img src={Arrow}></img>
              </Button>
            </div>
            <div className='showcase-cont'>
              <div id="div1" className="targetDiv" style={{ display: selectedDiv === '1' ? 'block' : 'none' }}>
                <img src={Hdcont1}></img>
                <h5>Next-Generation Technology</h5>
                <p>We stay at the forefront of technological advancements. Akkenna leverages the latest tools, frameworks, and methodologies to ensure your generative AI solutions are built with innovative.</p>
              </div>
              <div id="div2" className="targetDiv" style={{ display: selectedDiv === '2' ? 'block' : 'none' }}>
              <img src={Hdcont2}></img>
                <h5>Integrated Methodology</h5>
                <p>Beyond just development, Akkenna adopts a holistic approach. We consider the entire generative AI lifecycle, from conceptualization and design to implementation, testing, and ongoing optimization.
                </p>
              </div>
              <div id="div3" className="targetDiv" style={{ display: selectedDiv === '3' ? 'block' : 'none' }}>
              <img src={Hdcont3}></img>
                <h5>Progressive Creative Solutions</h5>
                <p>We thrive on pushing the boundaries of what's possible. Akkenna encourages a culture of innovation and creativity, ensuring that your generative AI solutions are functional and visionary.
                </p>
              </div>
              <div id="div4" className="targetDiv" style={{ display: selectedDiv === '4' ? 'block' : 'none' }}>
              <img src={Hdcont4}></img>
              <h5>Candid Collaboration</h5>
                <p>Collaboration is key to success. Akkenna maintains transparent communication channels, keeping you informed at every stage of the generative AI development process and throughout the journey.
                </p>
              </div>
            </div>
          </div>
          <div className='showcase-hd'>
            <div className='round'>
              <span className='circle a'></span>
              <h6 className="showSingle" onClick={() => handleShowSingle('1')}>Next-Generation<br/>Technology</h6>
            </div>
            <div className='round'>
              <span className='circle b'></span>
              <h6 className="showSingle" onClick={() => handleShowSingle('2')}>Integrated<br/>Methodology</h6>
            </div>
            <div className='round'>
              <span className='circle c'></span>
              <h6 className="showSingle" onClick={() => handleShowSingle('3')}>Progressive Creative<br/>Solutions</h6>
            </div>
            <div className='round'>
              <span className='circle d'></span>
              <h6 className="showSingle" onClick={() => handleShowSingle('4')}>Candid<br/>Collaboration</h6>
            </div>
          </div>
        </div>
      </div>  
    </div>  
  );
}

export default Showcase;