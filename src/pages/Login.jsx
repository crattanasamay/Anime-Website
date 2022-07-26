import React from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
    margin: 0px;
    padding: 0px;
    background-color: #12112a;
    //width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100%;
 
`

const LoginContainer = styled.div`
  height: 400px;
  width: 250px;
  background-color: black;

`

export default function Login() {
  return (
    <Wrapper>
      <LoginContainer>

      </LoginContainer>
    
      
    </Wrapper>
  )
}
