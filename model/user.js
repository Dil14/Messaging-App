var mongoose=require('mongoose');
var mongooseUnique=require('mongoose-unique-validator');
var bcrypt=require('bcrypt-nodejs');
var crypto=require('crypto');

var Schema=mongoose.Schema;

var userSchema=new Schema({
  firstname:{type:String,required:true},
  lastname:{type:String,required:true},
  password:{type:String,required:true},
  email:{type:String,required:true,unique:true},
  message:[{type:Schema.Types.ObjectId,ref:'Message'}],
});


userSchema.pre('save',function(next){
  var user=this;
  if(!user.isModified('password')) return next();
  bcrypt.genSalt(10,function(err,salt){
    if(err) return next(err);
    bcrypt.hash(user.password,salt,null,function(err,hash){
      if(err) return next(err);
      user.password=hash;
      next();
    });
  });
});

userSchema.methods.comparePasswords=function(password){
  return bcrypt.compareSync(password,this.password);
}

userSchema.plugin(mongooseUnique);

module.exports=mongoose.model('User',userSchema);
