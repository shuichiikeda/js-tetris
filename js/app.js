const mysql = require('mysql');
const connection = mysql.createConnecton({
    host : 'localhost',
    user : 'root',
    password : ''
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
    }

    console.log('connected as id: ' + connection.threadId);
});

var result = connection.query({
    sql: 'SELECT score FROM `scores` ORDER BY score DESC',
    timeout: 40000, // 40s
 //    values: ['David']
}, function (error, results, fields) {
});
console.log(result);


