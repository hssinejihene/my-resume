import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
          I have been working on different projects with latest technologies and in different domains and I am a driven individual with the ability to adapt to any situation and proven potantial to grow self and others.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Summer internship</h3>
              <div className="subheading mb-3">Pasteur Institute of Tunis</div>
              <p>
              - Implementation of an analysis pipeline of data from medical
                research, in particular Drug Discovery, using machine learning
                approaches.
              - Test, evaluate and compare dierent machine learning algorithms
                in the prediction of chemical compound attributes.
               Using: Python,Tensorow
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">End of study internship</h3>
              <div className="subheading mb-3">Carthage BusinessWare</div>
              <p>
              Realization of a multichannel customer management application
              including :
              - A back oce administrator system: managing targeted digital
               marketing campaigns, analysing customer behaviour following the
               launch of campaigns and connecting a multi-channel sales force to
               track campaigns.
               - A transactional extranet that represents a secure web space accessible
               by users.
               Using : PHP5, Python,JSON ,Bootstrap, jQuery.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2018 – May 2018</span>
            </div>
          </div>

          

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Summer internship</h3>
              <div className="subheading mb-3">National Computer Center</div>
              <p>
              Development of a mobile application for CNI
              Using :ANGULAR JS,MONGODB,JQUERY,HTML5,CSS3
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2017</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Third year Software Development Engineering</h3>
              <div className="subheading mb-3">Higher Institute of computer science</div>
              
              
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Bachelor of Science in Computer Science</h3>
              <div className="subheading mb-3">Higher Institute of computer science</div>
              
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2015–2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Diploma of the Baccalaureate in Computer Science</h3>
              <div className="subheading mb-3">Rafeha Mnihla Ariana High School</div>
              
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2014–2015</span>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
          Apart from being a web developer, I enjoy most of my time being outdoors.  I enjoy jogging .
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5"> Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Fundamentals of Scalable Data Science de IBM
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Advanced Machine Learning and Signal Processing de IBM
            </li>
            
            
            
            
            
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
