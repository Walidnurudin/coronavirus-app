import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import { Link } from "react-router-dom";

const Navigasi = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="d-none d-md-flex border-bottom" color="light" light expand="md">
        <Container>
          <Link to="/">
            <NavbarBrand
              className="font-weight-bold"
            >
              COVID<span className="text-danger">19</span>
            </NavbarBrand>
          </Link>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink><Link to="/" className="Navlink">Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/world" className="Navlink">World</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/about" className="Navlink">About</Link></NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>

      {/* NAVBAR RESPONSIVE */}
      <Navbar className="d-md-none border-bottom" color="light" light>
        <Container>
          <Link to="/">
            <NavbarBrand
              className="font-weight-bold"
            >
              COVID<span className="text-danger">19</span>
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink><Link to="/" className="Navlink">Home</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/world" className="Navlink">World</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/about" className="Navlink">About</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigasi;