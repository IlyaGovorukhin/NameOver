var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {

  var data = req.query.fullname;

  var countdata = data.split(' ');
  countdata.forEach((n)=> {
    if ( n.search(/\d/) != -1 ) {
      res.send('Invalid fullname');
    } else {
      var filteredData = data.split(' ').reverse();

      if (filteredData.length < 4 && req.query.fullname.length > 0) {
        var arr1 = filteredData.shift();
        var count = [];
        filteredData.forEach((n)=> {
          const Upperre = regular(n);
          count.push(Upperre[0])
        })
        if(count.length) {
          var alphaNumeric = arr1.concat(' ' + count.reverse().join('. ') + '.');
          res.send(alphaNumeric);
        } else {
          res.send(arr1);
        }
      } else {
        res.send('Invalid fullname');
      }
    }
  })




});
function regular(name){
  var re = new RegExp('()([A-ZА-Я]*)');
  var namerec = name.match(re)
  return namerec;
}


module.exports = router;

