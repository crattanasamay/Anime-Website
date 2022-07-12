const express = require('express');
const router = express.Router();


router.get('/api',(req,res) => {
    const str = [{
        "message" : "Hello",
        "message2": "Hello World",
    }];

    res.end(JSON.stringify(str));

});


module.exports = router;