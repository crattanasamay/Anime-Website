const axios = require('axios');
const express = require('express');
const { isCompositeComponent } = require('react-dom/test-utils');
const router = express.Router();
require('dotenv').config()

const animeList = [
'https://api.myanimelist.net/v2/anime/season/2022/spring?sort=anime_score&limit=4',
'https://api.myanimelist.net/v2/anime/season/2021/winter?sort=anime_score&limit=4',
'https://api.myanimelist.net/v2/anime/season/2021/fall?sort=anime_score&limit=4',
'https://api.myanimelist.net/v2/anime/season/2021/summer?sort=anime_score&limit=4',
'https://api.myanimelist.net/v2/anime/season/2021/spring?sort=anime_score&limit=4',
'https://api.myanimelist.net/v2/anime/season/2020/winter?sort=anime_score&limit=4',
'https://api.myanimelist.net/v2/anime/season/2020/fall?sort=anime_score&limit=4',
'https://api.myanimelist.net/v2/anime/season/2020/summer?sort=anime_score&limit=4',
'https://api.myanimelist.net/v2/anime/season/2020/spring?sort=anime_score&limit=4',

]

router.get('/',async (req,res) => {

    const animeMap = animeList.map(async link =>{
        const response = await axios.get(`${link}`,{
            headers: {
                'X-MAL-CLIENT-ID' : `${process.env.accessToken}`,
            }
        })

         const data = response.data;
         //console.log(data)
         return data;
    })

    const helloWorld = await Promise.all(animeMap);

   
    res.end(JSON.stringify(helloWorld))

    

});


module.exports = router;