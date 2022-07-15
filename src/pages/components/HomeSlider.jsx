import React, {useEffect,useState} from 'react';
import styled from 'styled-components';


const Slider = styled.div`
  display:grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3,1fr);
  padding: 3rem;

`

const SliderImage = styled.img`

  max-height: 318px;


`
const SliderCard = styled.div`
  text-align: center;
  vertical-align: top;

`

const SliderHeader = styled.h1`
  text-align: center;
`

const Wrapper = styled.div`
  background-color: #a9b7e0;
  margin: 0px;
  display: block;
  width:100%;
  position: relative;
  top: -1.rem;
`



export default function HomeSlider() {

  useEffect ( () => {
      async function fetchData() {
      const data = await fetch('/api');
      const items = await data.json();
      //console.log(items.data)
      console.log(items.data)
      //console.log(items.data[0].node.title)
      setItems(items.data)
    }
    fetchData();
  }, []);

  const [items,setItems] = useState([]);

  function createCard(props){
    return(
      <SliderCard key = {props.id}>
        <SliderImage src={props.main_picture.medium} />
        <h3 className = "card_title">{props.title}</h3>
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
              createCard(item.node)
            )
          })
        }
        
      </Slider>
      </Wrapper>
    )
}
