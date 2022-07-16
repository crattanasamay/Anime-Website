import React from "react";
import Navbar from "./components/Navbar";
import HomeSlider from "./components/HomeSlider";
import Features from "./components/Features";



import styled from "styled-components";



const HomePage = styled.div`
    margin: 0px;
    padding: 0px;
`

const Home = () =>{

    return(
        <HomePage>
            <Navbar/>
            <HomeSlider/>
            <Features/>
        </HomePage>
    
    
    )
}

export default Home;