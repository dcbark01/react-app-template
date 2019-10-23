import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.svg';


const navbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              {' My React App'}
            </Navbar.Brand>
        </Navbar>
    )
}

export default navbar;