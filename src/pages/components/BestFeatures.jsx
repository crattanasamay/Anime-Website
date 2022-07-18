import React, {useEffect,useState} from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`

`

const Button = styled.button`
    height: 3rem;
    width: 6rem;
    border-radius: 1rem;

    &:hover{
        background-color: #2F5C8F;
        color:white;
    }
    
`
const ButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    flex: 1;
    
`
const ImageWrapper = styled.div`
   flex: 1;
`
const FlexWrapper =styled.div`
    display:flex;
    text-align: center;


`
const FeatureHeader = styled.h1`
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #12112a;
    color:#d4dff1;
`
const AnimeHeader = styled.h2`
    color:white;
`

const AnimeImg = styled.img`
    max-height: 318px;
    
`
export default function BestFeatures() {

    const [items,setItems] = useState([]);

    useEffect ( () => {
        async function fetchData(){
            const data = await fetch('/api2');
            const items = await data.json();
            setItems(items)
        }
        fetchData();
    },[])

    items.map(item =>{
        console.log(item.season)
    })
    return (

    <Wrapper>
        <FeatureHeader>
            Best Anime of Each Season
        </FeatureHeader>
        <FlexWrapper>
        <ButtonWrapper>
            <Button>Spring 2020</Button>
            <Button>Summer 2020</Button>
            <Button>Fall 2020</Button>
            <Button>Winter 2020</Button>
            <Button>Spring 2021</Button>
            <Button>Summer 2021</Button>
            <Button>Fall 2021</Button>
            <Button>Winter 2021</Button>
            <Button>Spring 2022</Button>
        </ButtonWrapper>
        <ImageWrapper>
            <AnimeHeader>Anime of Season</AnimeHeader>
            <AnimeImg src=""/>
        </ImageWrapper>
            


        </FlexWrapper>
        

    </Wrapper>
    )
}
