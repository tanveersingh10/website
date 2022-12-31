import { render } from '@testing-library/react';
import React from 'react';
import {Card, CardBody, CardImg, CardHeader, CardText, CardTitle, Badge} from 'reactstrap';


function Skills(props) {
    return (
        <div className="mt-5" id="skills"> 
            <h2 className="text-center mb-4"> <u>Radioactive Powers</u></h2>
            <div className="row justify-content-center">   
                <div className="col-12 col-sm-3 m-1 d-flex align-items-stretch ">
                    <Card className="m-2">
                        <CardImg width="100%" src="assets/coding.jpeg" />
                        <CardBody>
                        <CardTitle className="card-title d-flex justify-content-center"><h5>Programming Languages</h5></CardTitle>
                            <CardText>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">JavaScript</li>
                                    <li className="list-group-item">Python</li>
                                    <li className="list-group-item">HTML</li>
                                    <li className="list-group-item">CSS</li>
                                    <li className="list-group-item">Java &nbsp;
                                    <Badge color="warning" pill>Coming Soon</Badge></li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-12 col-sm-3 m-1 d-flex align-items-stretch">
                    <Card className="m-2">
                        <CardImg className="object-fit-fill" width="100%" src="assets/technologies.jpeg" />
                        <CardBody>
                            <CardTitle className="card-title d-flex justify-content-center"><h5>Technologies</h5> </CardTitle>
                            <CardText>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">React.js</li>
                                <li className="list-group-item">Bootstrap</li>
                                <li className="list-group-item">JQuery</li>
                                <li className="list-group-item">Git</li>
                                <li className="list-group-item">SASS & LESS</li>
                            </ul>

                            </CardText>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-12 col-sm-3 m-1 d-flex align-items-stretch">
                        <Card className="m-2">
                        <CardImg width="100%" src="assets/social.jpeg" />
                        <CardBody>
                            <CardTitle className="card-title d-flex justify-content-center"><h5>Soft Skills</h5></CardTitle>
                            <CardText> 
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Problem Solving</li>
                                    <li className="list-group-item">Communication</li>
                                    <li className="list-group-item">Ability to Learn Quickly</li>
                                    <li className="list-group-item">Effective Leadership</li>
                                    <li className="list-group-item">Critical Thinking</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
        </div>
    </div>
);
}

export default Skills;


            
