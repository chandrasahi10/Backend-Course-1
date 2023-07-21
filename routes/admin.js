const express = require('express');
const path = require('path');
const fs = require('fs');

const rootDir = require('../util/path');
const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
 });
 
 router.post('/add-product',(req,res,next)=>{
      
    fs.writeFile("product.txt",`${req.body.title}` ,(err)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    })   
 });

module.exports = router;