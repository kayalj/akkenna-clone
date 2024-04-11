import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IconBox1 from '../Images/Icon-Box-1.png';
import IconBox2 from '../Images/Icon-Box-2.png';
import IconBox3 from '../Images/Icon-Box-3.png';
import IconBox4 from '../Images/Icon-Box-4.png';
import IconBox5 from '../Images/Icon-Box-5.png';
import IconBox6 from '../Images/Icon-Box-6.png';
import IconBox7 from '../Images/Icon-Box-7.png';
import IconBoxArrow from '../Images/Icon-Box-More-Arrow.svg' 

function IconBox() {
  return (
    <div className='container'>
        <div className='iconbox'>
          <div className='iconbox-main-hd'>
              <h1>Discover Our Mind-Blowing Array<br/><span id='iconbox-hd-line'>Of Offerings!</span></h1>
          </div>
          <Row className='iconbox-row-1'>
              <Col md={3}>
                <img src={IconBox1}></img>
                <h6>AI Service<br/>Development</h6>
              </Col>
              <Col md={3}>
                <img src={IconBox2}></img>
                <h6>Generative AI<br/>Service</h6>
              </Col>
              <Col md={3}>
                <img src={IconBox3}></img>
                <h6>Mobile App<br/>Development</h6>
              </Col>
              <Col md={3}>
                <img src={IconBox4}></img>
                <h6>Web App<br/>Development</h6>
              </Col>
          </Row>
          <Row className='iconbox-row-1'>
              <Col md={3}>
                <img src={IconBox5}></img>
                <h6>UI/UX Design<br/>Service</h6>
              </Col>
              <Col md={3}>
                <img src={IconBox6}></img>
                <h6>Cloud Service<br/>Development</h6>
              </Col>
              <Col md={3}>
                <img src={IconBox7}></img>
                <h6>Manages<br/>Teams</h6>
              </Col>
              <Col md={3} className='iconbox-end'>
                <h6>More Service</h6>
                <img src={IconBoxArrow}></img>
              </Col>
          </Row>
        </div>
    </div>
  )
}

export default IconBox
