
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/user.js');
const jwt  = require('jsonwebtoken')
// this router will create a document in db (user details)
router.post('/signup', function(req, res) {

         const user = new User({
            _id: new  mongoose.Types.ObjectId(),
            email: req.body.email,
            password: req.body.password
         });
         user.save().then(function(result) {
            console.log(result);
            res.status(200).json({
               success: 'New user has been created'
            });
         }).catch(err=>{
           res.status(500).json({error:err})
         })

})
router.get('/a',checking)
router.get('/b',checking)
router.post('/one',checking)
router.post('/abc',checking)
function checking(req,resp){
//every time the user request with token in header (or) body to the server 
  var token = req.body.token
  if(token){
// jwt verify the token for each request to the router with the secret key if it is valid it response with success message or it can process to other using next()
    jwt.verify(token,'dhanasekar',(err,data)=>{
      if(err){
        return resp.json({"success":false,"msg":"we didnt succeed"})
      }else {
        return resp.json({"success":true,"msg":data})
      }
    })
  }
  else{
    return resp.json({"sucess":false,"msg":"dai check with post"})
  }
}
//this router will check whether the user details is available in router are not.if, available provide the user details 
router.post('/signin', function(req, res){
   User.findOne({email: req.body.email})
   .exec()
   .then(function(user) {
// here the jwt data is used to encrypt the user information  with secret keyword and expiry time and response the user with data
            const JWTToken =jwt.sign({
              email:user.email,
              info:{
                name:'dhanasekar',
                github:'github.com/dhanasekar13',
                quote:'never underestimate yourself and never give up'
              },
              _id:user._id
            },'dhanasekar',{expiresIn:'2h'})
          return res.status(200).json({
               success: 'Welcome to the JWT Auth',
               token:JWTToken
            });
        })
   .catch(error => {
      res.status(500).json({
         error: error
      });
   });;
});
module.exports = router;
