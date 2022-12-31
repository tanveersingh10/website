import React from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle, Badge, Col, Row, Media} from 'reactstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function About(props) {
    return(
        <div className="container mt-4" id="about">
        <div className="row row-content d-flex">
            <div className="col-8 mx-auto d-block col-md-3">
                <img className=" img-fluid img-thumbnail" src="assets/singh.jpg" />
            </div>
            <div className="col-12 col-md-7 float-right">
                <h2 id="about-header"><u>About Me</u></h2>
                <div id="about-para">
                    <p>Hey everyone this is Tanveer. I'm a first-year Computer Science
                        student studying at NUS, Singapore. I spent my first winter break
                        learning front-end development with React.js, Bootstrap and JQuery 
                        so I made this website to test it out.
                    </p>
                    <p> I'm looking forward to making a lot more progress in the field of software development.
                        Feel free to get in touch with me for a chat <AnchorLink href='#contact'>here.</AnchorLink>
                    </p>
                </div>
            </div>
        </div>
        </div> 
        
    )
}

export default About;