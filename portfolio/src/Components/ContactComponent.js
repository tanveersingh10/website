import React from 'react';

function Contact(props) {
    return(
        <div className="footer" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <h3 className="text-center m-4"><u>Get in Touch</u></h3>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon" href="mailto:tanveersengh@gmail.com"><i className="fa fa-envelope-o"></i></a>
                            <span> &nbsp;</span>
                            <a className="btn btn-social-icon btn-github" href="https://github.com/tanveersingh10"><i className="fa fa-github"></i></a>
                            <span> &nbsp;</span>
                            <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/tanveer-singh-1534a1258/"><i className="fa fa-linkedin"></i></a>
                            
                            
                        </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Contact;