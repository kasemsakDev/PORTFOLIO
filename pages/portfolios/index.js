import BaseLayout from "../../components/layouts/BaseLayout";
import BasePage from "../../components/BasePage";
import Link from "next/link";
import axios from "axios";
import { Row, Col } from 'reactstrap';
const Portfolios = ({posts}) => {



  return (
    <BaseLayout>
          <BasePage>
             
              <h1>My portfolios.</h1>
              <br></br>
                  <h3 style={{ marginLeft: 30, marginBottom: 10 }}>Social Network Application With .Net Core and React</h3>
                  <Row>
                  <img src="/images/Social Network Application.png" className="img-responsive" width="400" height="300" style={{ marginLeft: 30, marginBottom: 5 }} />
                  <img src="/images/Social Network Application2.png" className="img-responsive" width="400" height="300" style={{ marginLeft: 30, marginBottom: 5 }}/>
                  <img src="/images/Social Network Application3.png" className="img-responsive" width="400" height="300" style={{ marginLeft: 30, marginBottom: 5 }}/>
                  </Row>
                  <Row>
                      <Col md="12">
                          Link : <a href="https://myreactivitiesapp.herokuapp.com/" target="_blank" style={{ color: "White" }}>https://myreactivitiesapp.herokuapp.com/</a>
                      </Col>
                      <Col md="12">
                          github : <a href="https://github.com/kasemsakDev/reactivities" target="_blank" style={{ color: "White" }}>https://github.com/kasemsakDev/reactivities</a>
                      </Col>
                          </Row>
              <p><b>Description : </b>
                  You can post events or join other people's events. And you can also chat or leave comments about other people's activities. You can track users in the system.
              </p>
              <h4>Technology Used</h4>
        <ul>
                  <li>                  
                          <a style={{ color: "White" }}>
                              React (with Typescript) and Mobx
                          </a>
                  </li>
                  <li>
                      <a style={{ color: "White" }}>
                              Web API in .Net Core with Clean Architecture using the CQRS + Mediator pattern
                      </a>
                  </li>
                  <li>
                      <a style={{ color: "White" }}>
                          AutoMapper and MediatR packages in the .Net projects
                      </a>
                  </li>
                  <li>
                      <a style={{ color: "White" }}>
                          multi-project solution with .Net Core
                      </a>
                  </li>
                  <li>
                      <a style={{ color: "White" }}>
                          Entity Framework Core as the Object Relational Mapper
                      </a>
                  </li>
                  <li>
                      <a style={{ color: "White" }}>
                          ASPNET Core SignalR into an application for real time web communication
                      </a>
                  </li>
                  <li>
                      <a style={{ color: "White" }}>
                          .Net Core Identity
                      </a>
                  </li>
              </ul>

              <hr></hr>

              <br></br>

                  <h3>E-commerce app With React Redux, Hooks, ContextAPI, Stripe, Firebase</h3>
                  <Row>
                  <img src="/images/E-commerce.png" className="img-responsive" width="400" height="300" style={{ marginLeft: 30, marginBottom: 5 }} />
                  <img src="/images/E-commerce2.png" className="img-responsive" width="400" height="300" style={{ marginLeft: 30, marginBottom: 5 }} />
                  <img src="/images/E-commerce3.png" className="img-responsive" width="400" height="300" style={{ marginLeft: 30, marginBottom: 5 }} />
                      </Row>
                  <Row>
                      <Col md="12">
                          Link : <a href="https://intense-thicket-02882.herokuapp.com/shop" target="_blank" style={{ color: "White" }}>https://myreactivitiesapp.herokuapp.com/</a>
                      </Col>
              github : <a href="https://github.com/kasemsakDev/E-commerce-app-With-React" target="_blank" style={{ color: "White" }}>https://github.com/kasemsakDev/E-commerce-app-With-React</a>
                      <Col md="12">
                      </Col>
                          </Row>
              <p><b>Description : </b>
                   An e-commerce system that can add products to cart and Google Sign In Authentication. 
                  </p>
                  <Row>
                      <Col md="12">
              <h4>Technology Used</h4>
              <ul>
                  <li>
                      <a style={{ color: "White" }}>
                          React
                      </a>
                  </li>
                  <li>
                      <a style={{ color: "White" }}>
                          Redux
                      </a>
                  </li>
                  <li>
                      <a style={{ color: "White" }}>
                          React Hooks
                      </a>
                  </li>
                  <li>
                      <a style={{ color: "White" }}>
                          Firebase
                      </a>
                  </li>
                  <li>
                      <a style={{ color: "White" }}>
                          React Suspense + React Lazy
                      </a>
                  </li>
              </ul>
              <hr></hr>
                      </Col>
                    </Row>
                  <Row>
                      <h3>Knowledge Management Application</h3>
                  </Row>
              <Row>
              <img src="/images/k.png" className="img-responsive" width="400" height="300" style={{ marginLeft: 30, marginBottom: 5 }} />
                  <img src="/images/k2.png" className="img-responsive" width="400" height="300" style={{ marginLeft: 30, marginBottom: 5 }} />
                  <img src="/images/k3.png" className="img-responsive" width="400" height="300" style={{ marginLeft: 30, marginBottom: 5 }} />
                  </Row>
                  <Row>
                      <Col md = "12">
              Link : <a href="https://app-km.herokuapp.com" target="_blank" style={{ color: "White" }}>https://app-km.herokuapp.com</a>
                      </Col>
                      <Col md ="12">
              github : <a href="https://github.com/kasemsakDev/KM" target="_blank" style={{ color: "White" }}>https://github.com/kasemsakDev/KM</a>
                      </Col></Row>
              <p><b>Description : </b>
                  Develop a system for the Navy It is a system to set goals until the delivery of work. Results are measured in each department in the form of graphs.</p>
              <h4>Technology Used</h4>
              <ul>
                  <li>
                      <a style={{ color: "White" }}>
                          PHP MYSQL & Jquery
                      </a>
                  </li>                
              </ul>
              <hr></hr>

                  <br></br>
                  
      </BasePage>
    </BaseLayout >
  )
}

Portfolios.getInitialProps = async () => {
  let posts = [];
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    posts = res.data;
  } catch(e) {
    console.error(e);
  }

  return { posts: posts.slice(0, 10) };
}

export default Portfolios;
