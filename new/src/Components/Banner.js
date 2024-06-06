import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import me3 from "../assets/img/me3.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }

   
    }
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
                
                <h1>{`HI! I'M GAVEEN BUDDHIKA`} <h4 className="txt-rotate" >WEB DEVELOPER | DEVOPS ENGINEER | UI/UX DESIGNER</h4></h1>
                  <p>Passionate Software Engineering Undergraduate at the University of Kelaniya, Sri Lanka. Seeking to leverage technology to drive positive change and innovation. Currently gaining a strong foundation in programming, algorithms, and software development methodologies. Actively involved in extracurricular activities. Avid learner, tech enthusiast, and problem solver.</p>
                  <button onClick={() => navigateToContactSection()}>Let's Connect <ArrowRightCircle size={25} /></button>

                  <div className="social-icon">
                <a href="https://www.linkedin.com/in/gaveen-buddhika-a41159257/"><img src={navIcon1} alt="linkedin" /></a>
                <a href="https://www.linkedin.com/in/gaveen-buddhika-a41159257/"><img src={navIcon2} alt="facebook" /></a>
                <a href="#"><img src={navIcon3} alt="instagram" /></a>
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

