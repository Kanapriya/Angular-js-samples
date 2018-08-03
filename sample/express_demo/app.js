var express = require('express');
var app = express();

app.listen(3000,function(){
    console.log('server running on port 3000');
});

app.get('/',function(req,res){
    res.send('Hello World');
})

  
app.get('/api',function(req,res){
    res.json(student);
    $scope.myData = res;
    // res.send(readJSONFile("/home/kesavan/Documents/express_demo/file.json", function (err, json) {
    //     console.log(json);
    //     res.send(json);
       
    //   }));
})

function readJSONFile(filename, callback) {
    require("fs").readFile(filename, function (err, data) {
      if(err) {
        callback(err);
        return;
      }
      try {
        callback(null, JSON.parse(data));
      } catch(exception) {
        callback(exception);
      }
    });
  }

//   readJSONFile("/home/kesavan/Documents/express_demo/file.json", function (err, json) {
//     if(err) { throw err; }
//     console.log(json);
//   });
'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('student.json');  
let student = JSON.parse(rawdata);  
console.log(student); 