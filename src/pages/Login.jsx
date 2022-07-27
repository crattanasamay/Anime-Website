import React from 'react';
import styled from 'styled-components';
import {TextField,Button,Box} from "@mui/material";




const Wrapper = styled.div`
    margin: 0px;
    padding: 0px;
    min-height: 100% auto;
    background-color: #12112a;
    display: flex;
    width:100%;
    text-align: center;
    justify-content: center;
    align-items: center;
`

const LoginContainer = styled.div`
  height: 25rem;
  width: 15rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
`
const LoginHeader = styled.h1`
  padding-top: 2rem;
  padding-bottom: 2rem;
`
const Textfield = styled(TextField)`
  padding: 8px;
`


export default function Login() {
  return (
    <Wrapper>
      <LoginContainer>
        <LoginHeader>Login</LoginHeader>
        <Box pt={0}>
          <Textfield label="Email" placeholder="Enter Email" />
        </Box>

        <Box pt={2}>
          <Textfield label="Password" placeholder="Enter Password" />
        </Box>
        <Box pt={2}>
          <Button varient="outlined"> Log In</Button>

        </Box>

      
      </LoginContainer>
    </Wrapper>
  )
}
