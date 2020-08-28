  
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    position: fixed;
    min-height: 120px;
  }
  a, .navbar-nav .nav-link {
    float: right;
    font: Book 20px Avenir;
    color: #333333;
    padding: 20px 20px;
    &:hover {
      font-weight:bold;
      text-decoration: none;
    }
  }
  .navbar-brand{
    font-weight: bold;
    font: Black Avenir;
    font-size: 30px;
    letter-spacing: 0.4px;
    color: #333333;
  }
  .navbar-btn{
    background: #FF7676 0% 0% no-repeat padding-box;
    width: 200px;
    height: 60px;
    font-family: Raleway;
    border:none;
    border-radius: 38px;
    opacity: 1;
    text-align:center;
    font-weight: bold;
    letter-spacing: 0.2px;
    color: #FFFFFF;
  }
  .navbar-btn:hover{
    opacity: .6;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" fixed="top" bg="white">
      <Navbar.Brand href="/">
        Vytality
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/ourstory">Our Story</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/newsroom">Newsroom</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/careers">Careers</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <a href="/download">
          <button className="navbar-btn">
            DOWNLOAD
          </button>
        </a>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)