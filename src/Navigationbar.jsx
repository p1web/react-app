import React, {Component} from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home  from './pages/Home';
import Blogs  from './pages/Blogs';

export default class Navigationbar extends Component{
render(){
  return (
    <Router>
    <div>
    <Navbar bg="dark" expand="lg" variant="dark">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link as={Link} to="/">Home</Nav.Link>
    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    </div>
    <div>
        <Routes>
          <Route index path="/" component={<Home/>}></Route>
          <Route path="/blog" component={<Blogs/>}></Route>
        </Routes>
    </div>
    </Router>
  );
}

}