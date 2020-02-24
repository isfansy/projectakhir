import React, { useState } from "react";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import imglogo from "../img/logoqiu.png";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="footerfix fontall" color="white" light expand="md">
        <div className="container fontheader">
          <NavbarBrand>
            <Link to={"/"}>
              <div>
                <img src={imglogo} alt="foto" height="70px" />
              </div>
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                {/* <NavLink href="/components/">Shop</NavLink> */}
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    Shop
                    <MdArrowDropDown />
                  </DropdownToggle>
                  <DropdownMenu bottom>
                    <DropdownItem>Apparel</DropdownItem>
                    <DropdownItem>Acessoris</DropdownItem>
                    <DropdownItem>Limited Series</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Store
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  New Arrival
                </NavLink>
              </NavItem>
            </Nav>

            <Nav className="mr-right" navbar>
              <NavItem className="carticon">
                <AiOutlineSearch />
              </NavItem>
              <NavItem className="carticon">
                <FiShoppingCart />
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <FiUser className="iconuser" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Login</DropdownItem>
                  <DropdownItem>Register</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
