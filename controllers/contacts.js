const path = require('path');
const fs = require('fs');

const rootDir = require('../util/path');

exports.getContact = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
};

exports.postContact = (req,res,next)=>{
      
    fs.writeFile("User-contact.txt",`${req.body.name}:${req.body.email}` ,(err)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/success');
        }
    })   
 };