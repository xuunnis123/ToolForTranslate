import React from 'react'
import { Navbar, Nav,  Container, Row } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Navbar expand="lg" collapseOnSelect>
                <Container>
                <Navbar.Brand href="/">Ezra Lin's Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/translate"><i class="fa-sharp fa-solid fa-earth-americas"></i>Translate</Nav.Link>
                        <Nav.Link href="/admin"><i class="fa-regular fa-screwdriver-wrench"></i>Admin</Nav.Link>
                    
                    </Nav>
                    
                </Navbar.Collapse>
                </Container>
            </Navbar>
           
        </div>
    )
}

export default Header
