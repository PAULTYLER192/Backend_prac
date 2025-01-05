const express = require('express');
const router = express.Router();

//defining routes
router.get('/users',(req,res)=>{
    res.json([{id:1,name:'John Doe'},{id:2,name:'Jane Smith'}]);
});

router.post('/users',(req,res)=>{
    res.send('user created');
});

module.exports = router;