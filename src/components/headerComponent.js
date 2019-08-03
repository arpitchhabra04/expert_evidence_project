import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <div className="container">
            <NavbarBrand href="/">
              <span className="fa fa-gavel fa-lg" />
              ExpertEvidence.Org
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">
                    <span className="fa fa-info fa-lg" /> Help
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <span className="fa fa-user-plus fa-lg" /> SignUp
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">
                    <span className="fa fa-sign-in fa-lg" /> LogIn
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
