import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

export class MainNav extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Navbar bg="gray" >
             
                    <Navbar.Brand>
                        <a href="#home">DigiSSets</a>
                    </Navbar.Brand>
                                          

                <Nav >
                    
                {this.props.userId ?
                        <NavItem eventkey={5} href="#">
                            {this.props.userId}
                        </NavItem> :
                        null}
                    {this.props.userId ? null :
                        <NavItem eventkey={1} href="#" onClick={this.props.onLoginClicked}>
                            <Nav.Link>Login</Nav.Link>
                        </NavItem>}
                    {this.props.userId ? null :
                        <NavItem eventkey={2} href="#" onClick={this.props.onSignupClicked}>
                            <Nav.Link>Sign Up</Nav.Link>
                        </NavItem>
                    }
                    {this.props.userId ?
                        <NavItem eventkey={4} href="#" onClick={this.props.onLogoutClicked}>
                            Log Out
                        </NavItem> :
                        null}
                 </Nav>
            </Navbar>

            

        );
    }
}

export default MainNav;