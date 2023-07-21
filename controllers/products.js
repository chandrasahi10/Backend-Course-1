const path = require('path');
const rootDir = require('../util/path');
const fs = require('fs');

exports.getAddProduct= (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
 };

exports.postAddProduct = (req,res,next)=>{
      
    fs.writeFile("product.txt",`${req.body.title}` ,(err)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    })   
 };

exports.getProduct = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
};