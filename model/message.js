var mongoose= require('mongoose');
var mongooseUnique=require('mongoose-unique-validator');
var User=require('./user');

var Schema=mongoose.Schema;

var messageSchema=new Schema({
  content: {type:String,required:true},
  user: {type:Schema.Types.ObjectId,ref:'User'}
});

messageSchema.post('remove',function(doc){
  User.findById(doc.user,function(err,result){
    result.message.pull(doc);
    result.save();
  })
})

module.exports=mongoose.model('Message',messageSchema);
