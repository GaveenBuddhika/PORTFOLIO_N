import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import me3 from "../assets/img/me3.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {

  
    function navigateToContactSection() {
      const contactSection = document.getElementById("connect");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
         
          <Col  md={6} xl={7}>
            <TrackVisibility>
            
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className="text">
                
                <h1>{`HI! I'M GAVEEN BUDDHIKA`} <h4 className="txt-rotate" >3RD YEAR UNDERGRADUATE  |  DEVOPS ENTHUSIAST </h4></h1>
                  <p>As a dedicated software engineering undergraduate with a strong focus on web development and DevOps, I bring a robust set of skills including teamwork, communication, organizational and interpersonal abilities. Being passionate about expanding my knowledge and building a solid career framework, I am eager to contribute meaningfully to the workplace and become a valuable asset to the team.</p>
                  <button onClick={() => navigateToContactSection()}>Let's Connect <ArrowRightCircle size={25} /></button>

                  <div className="social-icon">
                <a href="https://www.linkedin.com/in/gaveen-buddhika-a41159257/"><img src={navIcon1} alt="linkedin" /></a>
                <a href="https://www.linkedin.com/in/gaveen-buddhika-a41159257/"><img src={navIcon2} alt="facebook" /></a>
                <a href="https://github.com/GaveenBuddhika"><img src={navIcon3} alt="github" /></a>
              </div>
                  </div>
                </div>}
              
            </TrackVisibility>
          </Col>
         
          <Col  md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={me3} alt="Header Img"/>
                </div>}
                
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

