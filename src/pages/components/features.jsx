import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #b1d4db;
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

`
const FeatureInfo = styled.h3`
    padding-bottom: 2rem;

`
export default function Features() {
  return (
    <Wrapper>
        <FeaturesCard>
            <FeatureHead>Voting</FeatureHead>
            <FeatureInfo>An Anime website specifically mean't for voting with your friends. You can vote for your top anime of the season a long with  other categories that you see fit!
            </FeatureInfo>
        </FeaturesCard>
        <FeaturesCard>
            <FeatureHead>All The Anime</FeatureHead>
            <FeatureInfo>Thanks to the MyAnimeList API users will always know that the information used on the website is always up to date! Making your anime adventures on this website that much enjoyable!</FeatureInfo>
        </FeaturesCard>
    </Wrapper>
  )
}
