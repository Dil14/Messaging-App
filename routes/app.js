var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index');
});

router.post("/",function(req,res,next){
 var title=req.body.title;
  res.render("eg",{title:title});
})

module.exports = router;
