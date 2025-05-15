import {Container,Nav,Navbar as NavbarBs, NavLink } from 'react-bootstrap'


export function Navbar(){
    return(
        <>
        <NavbarBs className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav>
                     <Nav.Link to="/" as={NavLink}>
                     Home

                     </Nav.Link>
                     <Nav.Link to="/store" as={NavLink}>
                     Store

                     </Nav.Link> 
                      <Nav.Link to="/about" as={NavLink}>
                     About

                     </Nav.Link>

                </Nav>
                Nav
            </Container>


        </NavbarBs>
            </>
    )
 }