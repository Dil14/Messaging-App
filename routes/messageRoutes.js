var express=require('express');
var Message=require('../model/message');
var User=require('../model/user');
var jwt=require('jsonwebtoken');

var router=express.Router();


router.get("/",function(req,res,next){
    Message.find()
    .populate('user','firstname')
    .exec(function(err,docs){
        if(err){
            return res.status(400).json({
              title:'An error occured',
                error:err  
            })
        }
        res.status(200).json({
            message:"success",
            obj:docs
        });
    });
});

router.use("/",function(req,res,next){
    jwt.verify(req.query.token,"skbgjsbs1353y5830~!##!@~",function(err,token){
        if(err){
            return res.status(400).json({
              title:'Authentication Failure',
                error:err  
            });
        }
        next();
    });
});

router.post("/",function(req,res,next){
    var decoded=jwt.decode(req.query.token);
    console.log(decoded.user._id);
    User.findById(decoded.user._id,function(err,doc){    
        console.log(doc);
    if(err){
            return res.status(404).json({
                title:'An error occured',
                error:err
            });
        }
var message=new Message({
    content:req.body.content,
    user:doc
});
    message.save(function(err,result){
        if(err){
            return res.status(404).json({
                title:'An error occured',
                error:err
            });
        }

     doc.message.push(result);
     doc.save();
        res.status(201).json({
            message:'Message saved',
            obj:result
        });
    });
    });
    });
    

router.patch("/:id",function(req,res,next){
    var decoded=jwt.decode(req.query.token);
    Message.findById(req.params.id,function(err,doc){
        if(err){
            return res.status(404).json({
                title:'An error occured',
                error:err
            });
        }

        if(!doc){
           return res.status(404).json({
               title:'Message not Found',
               error:{message:'Unable to retrieve the Message Contents'}
           });
        }
    if(doc.user!=decoded.user._id){
        return res.status(401).json({
            title:'Not Authorized',
            error:{message:'Not Authourized to edit the Message'}
        });
    }
    doc.content=req.body.content;
    doc.save(function(err,doc){
        if(err){
            return res.status(404).json({
                title:'An error occured',
                error:err
            });
        }
            res.status(200).json({
                title:"success",
                obj:doc
            });
        
    });    
  });
});


router.delete("/:id",function(req,res,next){
    var decoded=jwt.decode(req.query.token);
    Message.findById(req.params.id,function(err,doc){
        if(err){
           return res.status(404).json({
                title:'An error occured',
                error:err
            });
        }
        if(!doc){
            return res.status(404).json({
                title:'Message not found',
                error:{message:'Unable to retrieve the Message Contents'}
            
            });
        }
        if(doc.user!=decoded.user._id){
        return res.status(401).json({
            title:'Not Authorized',
            error:{message:'Not Authourized to delete the Message'}
        });
    }
        doc.remove(function(err,result){
            if(err){
               return res.status(404).json({
                title:'An error occured',
                error:err
            }); 
            }
              res.status(200).json({
                  message:'Success',
                  obj:result
              });
        });
    });
});

module.exports=router;