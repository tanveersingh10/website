import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';

import AnchorLink from "react-anchor-link-smooth-scroll";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    this.toggleNav = this.toggleNav.bind(this);
    }



    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <Navbar expand="md">
                <div className="container">
    
                    <NavbarToggler onClick={this.toggleNav}/>
                 
                    
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ms-auto">
                            <NavItem>
                                <a className="nav-link" href="#about">
                                    <span className="fa fa-file fa-regular fa-lg"></span> Resume
                                </a>
                            </NavItem>
                            <NavItem>
                                <AnchorLink className="nav-link" href="#about">
                                    <span className="fa fa-info fa-lg"></span> About
                                </AnchorLink>
                            </NavItem>

                            <NavItem>
                                <AnchorLink className="nav-link" href="#testimonials">
                                    <span className="fa fa-list fa-lg"></span> Testimonials
                                </AnchorLink>
                            </NavItem>

                            <NavItem>
                                <a className="nav-link" href="#skills">
                                    <span className="fa fa-code fa-regular fa-lg"></span> Skills
                                </a>
                            </NavItem>

                            <NavItem>
                                <AnchorLink className="nav-link" href="#">
                                    <span className="fa fa-address-card fa-lg"></span> Contact
                                </AnchorLink>
                            </NavItem>
                      
                        </Nav>
                    </Collapse>
                   
                </div>
            </Navbar>
        );
    }
}

export default Navigation;