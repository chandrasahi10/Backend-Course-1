const express = require('express');
const path = require('path');
const fs = require('fs');

const rootDir = require('../util/path');
const router = express.Router();

router.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
 });
 
 router.post('/contact-us',(req,res,next)=>{
      
    fs.writeFile("User-contact.txt",`${req.body.name}:${req.body.email}` ,(err)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/success');
        }
    })   
 });

module.exports = router;