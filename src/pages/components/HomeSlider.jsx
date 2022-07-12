import React, {useState,useEffect} from 'react';
import styled from 'styled-components';


const Image = styled.img`
    width:100%;
`

export default function HomeSlider() {

    useEffect(async() => {

            const response = await fetch('https://api.myanimelist.net/v2/anime/1');
            const data = response.json();
        }, []
    )
    return (
        <Image></Image>
    )
}
