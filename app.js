//var http =require('http');
//var myLogModule = require('./Log.js');
//var Person= require('./message.js');
var fs = require('fs');
var events = require('events');
var express = require('express');
var em = new events.EventEmitter();

var app = express();


app.get('/', function(req, res){

     var sql = require('mssql');

     var config ={
        user:'sa',
        passport:'mypassword',
        server:'localhost',
        database:'SchoolDB'
     }

     //Connect to your database

     sql.connect(config, function(err){
        if (err) console.log(err);

        var request = new sql.Request();

        request.query('select * from Student', function(err, recordset){

            if (err) console.log(err);

            res.send(recordset);
        });


     });


});


var server = app.listen(3000, function(){
     console.log('listening on port 3000');
});
