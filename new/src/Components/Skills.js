import html from "../assets/img/html.png";
import js from "../assets/img/js.png";
import css from "../assets/img/css.png";
import java from "../assets/img/java.png";
import php from "../assets/img/php.png";
import c from "../assets/img/c.png";
import react from "../assets/img/react.png";
import spring from "../assets/img/spring.png";
import node from "../assets/img/node.png";
import linux from "../assets/img/linux.png";
import docker from "../assets/img/docker.png";
import boostrap from "../assets/img/boostrap.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>SKILLS</h2>
    
                       <div className="section1">
                       <p>LANGUAGES</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                         
                            <div className="item">
                                <img src={js} alt="I1" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="I2" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="I3" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="I4" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={php} alt="I6" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="I7" />
                                <h5>C</h5>
                            </div>
                        </Carousel>
                        </div>

                        <div className="section2">
                        <p>FRAMEWORKS & TECHNOLOGIES</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={react} alt="I1" />
                                <h5>React Js</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="I2" />
                                <h5>Node Js</h5>
                            </div>
                            <div className="item">
                                <img src={spring} alt="I3" />
                                <h5>SpringBoot</h5>
                            </div>
                            <div className="item">
                                <img src={boostrap} alt="I4" />
                                <h5>Boostrap</h5>
                            </div>
                            <div className="item">
                                <img src={linux} alt="I5" />
                                <h5>Linux</h5>
                            </div>

                            <div className="item">
                                <img src={docker} alt="I6" />
                                <h5>Docker</h5>
                            </div>
                        </Carousel>

                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
}
