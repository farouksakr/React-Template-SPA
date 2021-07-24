import React from 'react';
import { NavbarSection, Logo, LogoText, UlList, ListItem, Anchor } from './style.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <NavbarSection>

            <div className="container">

                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>

                <UlList>
                    <ListItem><Link className="anchor" to="/">Home</Link></ListItem>
                    <ListItem><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#">Profile</Anchor></ListItem>
                    <ListItem><Anchor href="#">About</Anchor></ListItem>
                    <ListItem><Link className="anchor" to="/contact">Contact</Link></ListItem>
                </UlList>

            </div>

        </NavbarSection>
    )
}

export default Navbar;