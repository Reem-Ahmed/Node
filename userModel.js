const mongoose=require('mongoose');

// const schema=mongoose.Schema;

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        lowecase:true
    },
    age:Number
});

const User=mongoose.model('User',userSchema,'user');

module.exports=User;