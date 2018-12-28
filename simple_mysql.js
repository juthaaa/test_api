var config = require('./config.js');
var mysql =require('mysql');
var db = mysql.createConnection(config.mysql_connect); 
console.log(config.mysql_connect)

db.connect(function(err){
    if (err) 
        throw err;
    console.log("Connected !!")
    var id=1
    var sql = 'SELECT * FROM ac_bank '
           //     WHERE baid = '+id
    db.query(sql, function(err, result, fields){
        if(err)
            throw err;
            console.log(result);
            result.forEach(function(row){
                console.log(row.baId)
            })
            //console.log(fields);
    })
})