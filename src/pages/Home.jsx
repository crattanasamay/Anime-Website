import React from "react";
import Navbar from "./components/Navbar";
import HomeSlider from "./components/HomeSlider";
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
        </HomePage>
    
    
    )
}

export default Home;