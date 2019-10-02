import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Header = () => {
  return (
    <div className="row">
      <div className="header col-12 p-0">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <i className="far fa-registered fa-3x" />
          </Navbar.Brand>
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link href="#features">Dashboard</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
