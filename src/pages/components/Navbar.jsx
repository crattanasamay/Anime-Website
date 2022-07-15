import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #5360ff;
    align-items: center;
`

const NavContainer = styled.div`
   
`
const NavItem = styled.li`
    font-size: 1.6rem;
`

const LogoName = styled.h1`
    font-weight: bold;
    float: left;
`

const NavList = styled.ul`

`


export default function Navbar() {
  return (
    <Container>
        <LogoName>Anime Club</LogoName>
            <NavContainer>
                <NavList>
                    <NavItem>Home</NavItem>
                    <NavItem>Login</NavItem>
                    <NavItem>Search</NavItem>
                </NavList>
           </NavContainer>
    </Container>
  )
}


