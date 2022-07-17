import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-top: 1rem;
    padding-bottom: 2rem;
    background-color:#12112a;
    display:flex;

    @media (max-width: 500px){
        flex-direction: column;
    }
`

const LogoName = styled.h1`
    font-weight: bold;
    padding-top: 1rem;
    padding-left: 1rem;
    //color:white;
    color: #d4dff1;

    flex: 1;
   
`
const ContentWrapper = styled.div`
    padding-top: 1rem;
    flex: 1;
    flex-direction: column;
    @media (max-width: 500px){
        text-align: center;
    }

`
const Header = styled.h2`
    color: #d4dff1;
    padding-bottom: 1rem;
    

`

const Items = styled.h4`
    padding-top: 1rem;
    color: #d4dff1;
    
`
const Copy = styled.h4`
    padding-left: 1rem;
    padding-top: 1rem;
    color: #d4dff1;
`
const HeaderBar = styled.hr`
    background-color: #d4dff1;
    border-color:#d4dff1;
    height: .1rem;
    width: 3rem;
    @media (max-width: 500px){
        margin:auto;
    }

`
export default function Footer() {
  return (
    <Wrapper>
        <ContentWrapper>
            <LogoName>Anime Club</LogoName>
            <Copy>© 2022 ntwanimeclub - All Rights Reserved</Copy>



        </ContentWrapper>
        <ContentWrapper>
            <Header>Legal Information</Header>
            <HeaderBar/>
            <Items>Privacy Policy</Items>
            <Items>Cookie Policy</Items>
        </ContentWrapper>

        <ContentWrapper>
        <div class="tenor-gif-embed" data-postid="26231799" data-share-method="host" data-aspect-ratio="1.81818" data-width="100%"><a href="https://tenor.com/view/kisara-yandere-engage-kiss-cute-gif-26231799">Kisara Yandere GIF</a>from <a href="https://tenor.com/search/kisara-gifs">Kisara GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        </ContentWrapper>


    </Wrapper>
  )
}
