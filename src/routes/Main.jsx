import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Outlet, NavLink } from 'react-router-dom';


export default function Main() {
  return (
    <>
        <Navbar className="navbar" bg="dark" variant="dark" >
        <Container >
          <NavLink to="/">React Projects</NavLink>
          <Nav>
            <NavLink className="px-2" to="/carousel">Carousel</NavLink>
            <NavLink className="px-2" to="/p2">Project2</NavLink>
            <NavLink className="px-2" to="/p3">Project3</NavLink>
          </Nav>
        </Container>
      </Navbar>

      <div className='main'>
        <Outlet />
      </div>
    </>
  )
}