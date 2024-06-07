import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Simple Employee Management System",
      description: "The user management system is a web application developed with Spring Boot for backend functionality and JavaScript, HTML, and Bootstrap for the frontend. It offers essential CRUD operations to manage employee data, allowing users to save, delete, retrieve, and update employee records efficiently.",
      imgUrl: projImg1,
    },
    {
      title: "Personal Poortfolio",
      description: "My personal portfolio website, crafted with React, React Bootstrap, and CSS. This site showcases my professional skills, past projects, and provides a contact form for inquiries. Additionally, users can easily download my CV with a single click.",
      imgUrl: projImg2,
    },
    {
      title: "Web Calculator",
      description: "A fully functional calculator built using HTML, CSS, and JavaScript. Features basic arithmetic operations, including addition, subtraction, multiplication, and division. Clear and user-friendly interface, accessible on any modern web browser.",
      imgUrl: projImg3,
    },
    {
      title: "Login Form -React.js",
      description: "This project serves as a learning resource for React developers seeking to understand: Component creation and state management ,Form handling and input validation, User experience best practices",
      imgUrl: projImg4,
    },
    {
      title: "Personal Poortfolio",
      description: "Designed with HTML and CSS. This site highlights my skills and projects, offering a glimpse into my professional journey. Explore the About section to learn more about me, review my skill set, browse through my projects, and get in touch through the contact form.",
      imgUrl: projImg5,
    },
    {
      title: "Simple User Mangement System",
      description: "A basic user management system developed using HTML, CSS, and PHP. Enables users to register, log in, and manage their profile information. Utilizes a MySQL database to store and manage user data securely. Provides a foundation for building more complex web applications with user authentication and authorization.Design & Development",
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>PROJECTS</h2>
                <p>
                I possess a diverse skillset in web development, having created full-stack applications using HTML, CSS, JavaScript, and PHP for core functionalities. 
                Additionally, I explored modern frameworks like Spring Boot and React with Bootstrap, demonstrating my ability to adapt to various technological landscapes. 

                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
