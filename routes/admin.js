const express = require('express');

const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><label>Title</label><br><input type="text" name="title"></input><br><label>Size</label><br><input type="number" name="size"></input><button type="submit">Add Product</button></form>');
 });
 
 router.post('/add-product',(req,res,next)=>{
 
     console.log(req.body);
     res.redirect('/');
 });

module.exports = router;