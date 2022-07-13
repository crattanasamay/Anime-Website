const axios = require('axios')
const express = require('express');
const router = express.Router();
require('dotenv').config()


router.get('/',async (req,res) => {
    
   
    const result = await axios.get('https://api.myanimelist.net/v2/anime/ranking?ranking_type=airing&limit=4',{
        headers: {
            'Authorization': `Bearer ${process.env.API_CLIENTID}`,
        }
    })

    console.log(result.data)

    
    let str = [{
        "hello" : "hello"
    }]

    res.end(JSON.stringify(str))
    

});


module.exports = router;