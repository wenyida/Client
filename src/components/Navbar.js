import React, { Component } from 'react';
import { Navbar, Nav,NavDropdown,Form,Button,FormControl} from 'react-bootstrap';

class Topnavbar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand Href="#home">home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.link href="#link">sd</Nav.link>
                        <Nav.Link href="#link2">fdas</Nav.Link>
                        <NavDropdown title="工具" id="basic-nav-dropdown">
                            <Nav.item href="#action/2.1">sssd</Nav.item>
                            <Nav.item href="#action/2.2">dfdsw</Nav.item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="全站搜索" className="mr-sm-2" />
                        <Button variant="outline-success">搜索</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Topnavbar;