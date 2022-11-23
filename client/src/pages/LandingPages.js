import React, { useEffect, useState } from 'react'
import { API } from '../config/api'
import {Navbar, Button, Form, Nav, NavDropdown, Container} from 'react-bootstrap'

function LandingPages() {
    const [product, setProduct] = useState()
    useEffect(() => {
        const dataproduct = async ()=> {
        try {
            const response = await API.get("/books");
            setProduct(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    dataproduct();
    }, [setProduct])
    console.log(product);
  return (
    
    <div>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">WaysBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Category</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default LandingPages