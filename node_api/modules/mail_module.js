const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mailAppDB',{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
var conn =mongoose.Collection;
var mailSchema =new mongoose.Schema({
    name: {
      type:String,
      required:true,
      }, 

    email: {
        type:String,
        required: true,
        index: {
            unique: true,
        },},

    date:{
        type:Date,
        default:Date.now
    }
});

var mailModel = mongoose.model('mail',mailSchema);
module.exports=mailModel;