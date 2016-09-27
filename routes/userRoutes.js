var express=require('express');
var User=require('../model/user');
var jwt=require('jsonwebtoken');
var bcrypt=require('bcrypt-nodejs');
var router=express.Router();

router.post("/",function(req,res,next){
    var user=new User({
        firstname:req.body.firstName,
        lastname:req.body.lastName,
        email:req.body.email,
        password:req.body.password
    });

    user.save(function(err,result){
      if(err){
          return res.status(404).json({
              title:'An error Occured',
              error:err
          });
      }
      res.status(200).json({
          message:'Success',
          obj:result
      });
    });
});

router.post("/signin",function(req,res,next){

    User.findOne({email:req.body.email},function(err,doc){
    if(err){
        return res.status(404).json({
            title:"An Error Occured",
            error:err
        });
    }

    if(!doc){
    return res.status(404).json({
            title:'User Not Found',
            error:{message:'Unable to retrieve the user'}
        })
    }
    
      if(!bcrypt.compareSync(req.body.password,doc.password)){
         return  res.status(404).json({
        title:"Invalid credentials",
        error:{message:"Invalid username or password"}
    });
      }
    
    var token=jwt.sign({user:doc},'skbgjsbs1353y5830~!##!@~',{expiresIn:7200});   
       res.status(200).json({
        message:'Success',
        obj:token,
        _id:doc._id
    });
     
    
});
});

module.exports=router;