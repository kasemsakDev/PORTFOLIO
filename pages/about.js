import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { Row, Col } from 'reactstrap';
import Typed from "react-typed";


const welcome = ["Hello, Welcome"];
const About = () => {
  return (
    <BaseLayout>
          <BasePage
              title="About Me - Filip Jerga"
              className="about-page"
              canonicalPath="/about">
              <Row className="mt-5">
                  <Col md="6">
                      <div className="left-side">
                          <h1 className={`title`}><Typed
                              loop
                              typeSpeed={70}
                              backSpeed={70}
                              strings={welcome}
                              backDelay={1000}
                              loopCount={0}
                              showCursor
                              className="self-typed"
                              cursorChar="|"
                          /></h1>
                          <h4 className={`subtitle`}>To About Page</h4>
                          <p className={`subsubTitle`}>Feel free to read short description about me.</p>
                      </div>
                      <div>
                          <img src="/images/profile.jpg" width="300" height="300" />
                      </div>
                  </Col>
                  <Col md="6">
                      <div>
                          <p>My name is Kasemsak Kanunkhon  I am an experienced software developer.</p>
                          <p>
                              I graduated with a bachelor's degree in information technology And I have experience in
                              web development on a wide range of technologies and projects from .Net Web full stack
                          </p>
                          <p>
                              I am passionate about programming. and always want to develop yourself from past work experience
                              It allows me to learn work quickly and adapt well to new technologies.
                          </p>
                      </div>
                  </Col>
              </Row>
          </BasePage>
    </BaseLayout >
  )
}

export default About;
