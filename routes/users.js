var express = require('express');
var router = express.Router();
var CodeModel = require('../models/CodeModel');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/addCode',function(req,res,next){
  var codeEntity = new CodeModel({name:'java',type:"OO"});
  console.log(codeEntity);
  codeEntity.save();
  res.send(codeEntity);
});
router.ger('getCodes',function(req,res,next){
  
})
module.exports = router;
