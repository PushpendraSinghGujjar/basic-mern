var express = require('express');
const { getMaxListeners } = require('../modules/mail_module');
var router = express.Router();
var mailModule = require('../modules/mail_module');

var mailData = mailModule.find({});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/name', function(req, res, next) {
  mailData.exec((err, data) => {
    if (err) throw err;
    res.send(data);
  })
});

router.post('/name', function(req,res,next) {

  var name = req.body.name; 
  var email = req.body.email;
  
  var mail_model = new mailModule({ 
    name:name,
    email:email,
  });

  mail_model.save(function(err,doc){
     if (err) throw err;
     res.send(doc);
  });
});

module.exports = router;
