var express = require('express');
var router = express.Router();
const user=require('./../userModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  user.find((err,users)=>{
    res.json(users);
  });
});
router.post('/',(req,res,next)=>{
  let userObj=user.create(req.body,function(err,user){
    res.json(user);
  });
});

module.exports = router;
