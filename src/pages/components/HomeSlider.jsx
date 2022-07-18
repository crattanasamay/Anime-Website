import React, {useEffect,useState} from 'react';
import styled from 'styled-components';


const Slider = styled.div`
  display:flex;
  justify-content: space-between;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #12112a;

  @media (max-width: 823px){
    flex-direction: column;
    padding-top: 0rem;
    padding-bottom: 0rem;
  }

`

const SliderImage = styled.img`
  max-height: 318px;

  @media (max-width: 850px){
  }
`
const SliderCard = styled.div`

  flex: 1;
`

const SliderHeader = styled.h1`
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #12112a;
  color:#d4dff1;
`

const Wrapper = styled.div`
 

`

const AnimeTitle = styled.h3`
    color:#d4dff1;


`



export default function HomeSlider() {

  useEffect ( () => {
      async function fetchData() {
      const data = await fetch('/api');
      const items = await data.json();
      setItems(items.data)
    }
    fetchData();
  }, []);

  const [items,setItems] = useState([]);

  function createCard(props){
    return(
      <SliderCard key = {props.node.id}>
        <SliderImage src={props.node.main_picture.medium} />
        <AnimeTitle>Anime: {props.node.title}</AnimeTitle>
      </SliderCard>

    )
  }
 
    return (
      <Wrapper>
        <SliderHeader>Anime Of The Season</SliderHeader>
        <Slider>
          {
              items.map(item =>{
              return (
                createCard(item)
              )
            })
          }


        </Slider>

     
      </Wrapper>
    )
}


