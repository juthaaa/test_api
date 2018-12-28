var config = require('./../config.js');
var mysql =require('mysql');
var db = mysql.createConnection(config.mysql_connect); 
console.log(config.mysql_connect);

var getAll = function(){
    db.connect(function(err){
        if (err) 
            throw err;
        console.log("Connected !!")
        var id=1
        var sql = 'SELECT * FROM ac_bank'
        db.query(sql, function(err, result, fields){
            if(err)
                throw err;
            return result;
        })//query
    })//connect
}//getall

var getById = function(id){
    db.connect(function(err){
        if (err) 
            throw err;
        console.log("Connected !!")
        var id=1
        var sql = 'SELECT * FROM ac_bank WHERE baId ='+id
        db.query(sql, function(err, result, fields){
            if(err)
                throw err;
            return result;
        })//query
    })//connect
}//getall

//export models
exports.getAll = getAll
exports.getById = getById