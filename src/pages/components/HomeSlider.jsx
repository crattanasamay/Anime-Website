import React, {useEffect,useState} from 'react';
import styled from 'styled-components';


const sliderTitle = styled.p`
  font-size:1.6rem ;
`

export default function HomeSlider() {

  useEffect ( () => {
      async function fetchData() {
      const data = await fetch('/api');
      const items = await data.json();
      setItems(items.data)
      //console.log(items.data)
      //console.log(items.data[0].node.title)
    }
    fetchData();
  }, []);

  const [items,setItems] = useState([]);

  
 
    return (

      <div>
        {
          items.map((item) =>{
            <sliderTitle>
              {console.log(item.node.title)}
              {item.node.title}
            </sliderTitle>
          })
        }
        
      </div>
    )
}
