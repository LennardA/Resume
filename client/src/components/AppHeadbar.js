import React, { Component } from 'react';

import  {
    Navbar,
    Container,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavLink,
    NavItem

} from 'reactstrap';

class AppHeadbar extends Component {

    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render(){
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/"><h3>Lebenslauf</h3></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                 <NavLink href="https://github.com/LennardA">Git</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    };
}

export default AppHeadbar;