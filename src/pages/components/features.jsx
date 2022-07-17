import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #12112a;
    display:flex;
    @media (max-width:600px){
        flex-direction:column;
    }
`
const FeaturesCard = styled.div`
    flex: 1;
    text-align: center;
    @media (max-width:600px){
    }
`
const FeatureHead = styled.h1`
    padding-top: 2rem;
    padding-bottom: 2rem;
    color:#d4dff1;

`
const FeatureInfo = styled.h3`
    padding-bottom: 2rem;
    color:#d4dff1;

`
export default function Features() {
  return (
    <Wrapper>
        <FeaturesCard>
            <FeatureHead>Voting</FeatureHead>
            <FeatureInfo>An Anime website specifically for voting with your friends. You can vote for your top anime of the season with friends!
            </FeatureInfo>
        </FeaturesCard>
        <FeaturesCard>
            <FeatureHead>All The Anime</FeatureHead>
            <FeatureInfo>Thanks to the MyAnimeList API users will always know that the information used on the website is always up to date! Making your anime voting on this website that much enjoyable!</FeatureInfo>
        </FeaturesCard>
        
    </Wrapper>
  )
}
