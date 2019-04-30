var mysql = require('../database/mysql.js')


var _createUser = function(user) {
    var sql = "INSERT INTO user(userId,userName,password,createTime,address) VALUES(0,?,?,?,?) ";
    var addParams = [];
    addParams.push(user.userName)
    addParams.push(user.password)
    addParams.push(user.createTime)
    addParams.push(user.address)

    return new Promise((resolve, reject) => {
        mysql.query(sql, addParams, function(results, fields) {
            resolve(results, fields)
        })

    })
}
var _select = function() {
    var sql = "SELECT * FROM user";
    return new Promise((resolve, reject) => {
        mysql.query(sql, [], function(results, fields) {
            resolve(results, fields)
        })

    })
}
var _selectByName = function(name){
    var sql = "SELECT * FROM user WHERE userName = '"+name+"'";
    return new Promise((resolve, reject) => {
        mysql.query(sql, [], function(results, fields) {
            resolve(results, fields)
        })

    })
}
var _delete = function(userId) {
    var sql = "DELETE FROM user WHERE userId =" + userId
    return new Promise((resolve, reject) => {
        mysql.query(sql, [], function(results, fields) {
            resolve(results, fields)
        })

    })
}
module.exports = {
    insert: _createUser,
    select: _select,
    delete:_delete,
    selectByName:_selectByName
}