
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/user.js');
const jwt  = require('jsonwebtoken')
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
  var token = req.body.token
  if(token){
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
router.post('/signin', function(req, res){
   User.findOne({email: req.body.email})
   .exec()
   .then(function(user) {
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
