import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    height: 7rem;
    background-color: #5360ff;
`
const Wrapper = styled.div`
    align-items: center;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    text-align: left;
`
const Center = styled.div`
    flex: 1;    
    text-align: center;
`
const Right = styled.div`
    text-align: right;
    display: flex;
    flex: 1;
    justify-content: flex-end; // Items Float To The End
`
const NavItem = styled.div`
    font-size: 1.6rem;
    padding-left: 2.5rem;
`

const LogoName = styled.h1`
    font-weight: bold;
`


export default function Navbar() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <LogoName>
                   Anime Club
                </LogoName>
               
            </Left>
            <Center>
                <LogoName>
                    No Talent Whatsoever
                </LogoName>
            </Center>
            <Right>
                <NavItem>Home</NavItem>
                <NavItem>Login</NavItem>
                <NavItem>Search</NavItem>
            </Right>

        </Wrapper>
    </Container>
  )
}


