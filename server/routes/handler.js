const axios = require('axios');
const express = require('express');
const router = express.Router();
require('dotenv').config()


router.get('/',async (req,res) => {
    


   

    await axios.get('https://api.myanimelist.net/v2/anime/ranking?ranking_type=airing&limit=9',{
        headers: {
            'X-MAL-CLIENT-ID' : `${process.env.accessToken}`,
        },
    }).then((response) => {
        console.log("Data Recieved")
        res.end(JSON.stringify(response.data))
    }).catch((error) =>{
        console.log(error)
    })

    
    


    

});


module.exports = router;