import React, {useEffect,useState} from 'react';
import styled from 'styled-components';

export default function HomeSlider() {

  useEffect ( () => {
      async function fetchData() {
      const data = await fetch('/api');
      const items = await data.json();
      setItems(items)
    }
    fetchData();
  }, []);

  const [items,setItems] = useState([]);

  
 
    return (

      <div>
        {
          items.map(item =>(
            <p>{item.message}</p>
          ))
        }
      </div>
    )
}
