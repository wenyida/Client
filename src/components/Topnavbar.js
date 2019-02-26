import React, { Component } from 'react';
import { Navbar, Nav,NavDropdown,Form,Button,FormControl} from 'react-bootstrap';
import Logo from './../logo.svg';

class Topnavbar extends Component {
    render(props) {
        return (
            <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand Href="#home">
                    <img
                        alt=""
                        src={Logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />
                    {' 百渡 南蜀传奇'}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#link">活动</Nav.Link>
                        <Nav.Link href="#link2">公告</Nav.Link>
                        <NavDropdown title="工具" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/2.1">传奇爆率查询</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.2">传奇</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="全站搜索" className="mr-md-4" />
                        <Button variant="outline-success">搜索</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            </>
        );
    }
}
export default Topnavbar;