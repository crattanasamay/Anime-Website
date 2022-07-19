import React, {useEffect,useState} from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`

`

const Button = styled.button`
    height: 3rem;
    width: 6rem;
    border-radius: 1rem;
    text-align: center;
    background-color: #d4dff1;;
    
    
    &:hover{
        background-color: #2F5C8F;
        color:white;
    }
    
`
const ButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    flex: 1;  
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    justify-items: center;
    grid-gap: 1.5rem;
    grid-row-gap: 1rem;


`
const ImageWrapper = styled.div`
   flex: 1;

   @media (max-width: 700px){
        padding-top: 2rem;
    }

`
const FlexWrapper =styled.div`
    display:flex;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;

    @media (max-width: 700px){
        flex-direction: column;
    }


`
const FeatureHeader = styled.h1`
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #12112a;
    color:#d4dff1;
`
const AnimeHeader = styled.h2`
    color:#d4dff1;
    padding-bottom: 1rem;
`

const AnimeImg = styled.img`
    max-height: 318px;
    
`
export default function BestFeatures() {

    const [items,setItems] = useState([]);
    const [animeImage,setImage] = useState('https://api-cdn.myanimelist.net/images/anime/6/73245.jpg');
    const [animeSeason,setSeason] = useState("SUMMER 2022");
    const [animeTitle,setTitle] = useState('One Piece');

    useEffect ( () => {
        async function fetchData(){
            const data = await fetch('/api2');
            const items = await data.json();
            setItems(items)
        }
        fetchData();
    },[])

    
  
    console.log(items[0])

    function changeProfile(index){ 
        setImage(items[index].data[0].node.main_picture.medium)
        setTitle(items[index].data[0].node.title)
        const season = items[index].season.season + " " + items[index].season.year;
        setSeason(season.toLocaleUpperCase())
        

    }
    
    return (

    <Wrapper>
        <FeatureHeader>
            Best Anime of Each Season
        </FeatureHeader>
        <FlexWrapper>
            <ButtonWrapper>
                <Button onClick={() => changeProfile(8)}>Spring 2020</Button>
                <Button onClick={() => changeProfile(7)}>Summer 2020</Button>
                <Button onClick={() => changeProfile(6)}>Fall 2020</Button>
                <Button onClick={() => changeProfile(5)}>Winter 2020</Button>
                <Button onClick={() => changeProfile(4)}>Spring 2021</Button>
                <Button onClick={() => changeProfile(3)}>Summer 2021</Button>
                <Button onClick={() => changeProfile(2)}>Fall 2021</Button>
                <Button onClick={() => changeProfile(1)}>Winter 2021</Button>
                <Button onClick={() => changeProfile(0)}>Spring 2022</Button>
            </ButtonWrapper>
            <ImageWrapper>
                <AnimeHeader>Anime of {animeSeason}</AnimeHeader>
                <AnimeHeader>{animeTitle}</AnimeHeader>

                <AnimeImg src={animeImage}/>
            </ImageWrapper>
            
        </FlexWrapper>
        

    </Wrapper>
    )
}
