import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pro1 from "../assets/img/hellokaun.png";
import pro2 from "../assets/img/Bihar_News.png";
import pro3 from "../assets/img/marathi_news.png";
import pro4 from "../assets/img/Hindi_Local_News.png";
import pro5 from "../assets/img/atsign-logo.svg";
import pro6 from "../assets/img/emper.png";
import pro7 from "../assets/img/studio22.png";
import pro8 from "../assets/img/knowaround.png";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects = () => {

  const products = [
    {
      title: "Marathi News",
      description: "Marathi News is one of the most widely read Marathi language newspaper all top News",
      imgUrl: pro1,
    },
    {
      title: "Hindi News (Local News)",
      description: "Hindi News (Local News) is an Android application that allows users to read Hindi Samachar, Hindi Newspaper, Breaking news, etc.",
      imgUrl: pro2,
    },
    {
      title: "Bihar News",
      description: "Bihar Hindi News is an Android application to get the latest and breaking news of Bihar in Hindi from your favourite newspapers & TV Channels websites.",
      imgUrl: pro3,
    },
    {
      title: "Hello Kaun",
      description: "Hello Kaun is a made in India stress buster app built on atProtocol for fun that will make you smile by sending messages in different accent, pitch.",
      imgUrl: pro4,
    },
  
  ];

  const clients = [
    {
      title: "Atsign",
      description: "Atsign is flipping the Internet by giving consumers control of their private information through the open-source @platform. This framework enables developers to create applications for People, Entities, and Things, featuring secure exchange of information between known parties.",
      imgUrl: pro5,
    },
    {
      title: "Emper",
      description: "Emper is a cloud-based self-service interior book formatting and design program, primarily for indie publishers. Specialize is converting a raw manuscript into a professionally formatted and designed book for publication.",
      imgUrl: pro6,
    },
    {
      title: "Studio 22 Design",
      description: "Creating digital experiences that ignite growth. Web | Branding | UX/UI.",
      imgUrl: pro7,
    },
    {
      title: "Knowaround",
      description: "KnowAround.com allow you to come to one place for access to comprehensive information focused on the assessment of a location in order to help you make informed decisions.",
      imgUrl: pro8,
    },
  
  ];

  const services = [
    {
      title: "Functional Testing",
      description: "KnowAround.com allow you to come to one place for access to comprehensive information focused on the assessment of a location in order to help you make informed decisions.",
      imgUrl: pro2,
    },
    {
      title: "Automation Testing",
      description: "KnowAround.com allow you to come to one place for access to comprehensive information focused on the assessment of a location in order to help you make informed decisions.",
      imgUrl: pro2,
    },
    {
      title: "Performance Testing",
      description: "KnowAround.com allow you to come to one place for access to comprehensive information focused on the assessment of a location in order to help you make informed decisions.",
      imgUrl: pro2,
    },
    {
      title: "Web Development",
      description: "KnowAround.com allow you to come to one place for access to comprehensive information focused on the assessment of a location in order to help you make informed decisions.",
      imgUrl: pro2,
    },
    {
      title: "Mobile Development",
      description: "KnowAround.com allow you to come to one place for access to comprehensive information focused on the assessment of a location in order to help you make informed decisions.",
      imgUrl: pro2,
    },
    {
      title: "Accessibility Remediation",
      description: "KnowAround.com allow you to come to one place for access to comprehensive information focused on the assessment of a location in order to help you make informed decisions.",
      imgUrl: pro2,
    },
    {
      title: "DevOps",
      description: "KnowAround.com allow you to come to one place for access to comprehensive information focused on the assessment of a location in order to help you make informed decisions.",
      imgUrl: pro2,
    },
    {
      title: "Digital Marketing",
      description: "KnowAround.com allow you to come to one place for access to comprehensive information focused on the assessment of a location in order to help you make informed decisions.",
      imgUrl: pro2,
    },
  
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12} >
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link id="products" eventKey="first">OUR PRODUCTS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">OUR CLIENTS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">SERVICES</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          products.map((project1, index1) => {
                            return (
                              <ProjectCard
                                key={index1}
                                {...project1}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          clients.map((project2, index2) => {
                            return (
                              <ProjectCard
                                key={index2}
                                {...project2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>We offer a wide range of services covering every aspect of the software development life cycle.</p>
                    <Row>
                        {
                          services.map((project3, index3) => {
                            return (
                              <ProjectCard
                                key={index3}
                                {...project3}
                                />
                            )
                          })
                        }
                      </Row>
                       </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
           
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}