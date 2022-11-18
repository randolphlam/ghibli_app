import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.ul`
background: lightblue;
display: flex;
justify-content: space-evenly;
padding: 1em;
`

const NavLinks = styled.p`
font-size:3em;
color: black;
`


const NavBar = () => {

    return(
        <NavContainer>
            <NavLinks>
                <Link to="/">Home</Link>
            </NavLinks>
            <NavLinks>
                <Link to="/favourite">Favourites</Link>
            </NavLinks>
        </NavContainer>
    );


}

export default NavBar;