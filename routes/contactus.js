const path = require('path');
const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();

router.get('/contactus',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))
})

router.post('/contactus',(req,res,next)=>{
    res.redirect('/')
})

module.exports = router;