var user = require('../model/user.js')

var addUser = function(){
	user.insert({
		userName:'tom',
		createTime:'2019-04-13',
		address:'深圳'
	}).then((results)=>{
		console.log(results)
	})
}
var findUsers = function(){
	user.select().then((results)=>{
		console.log(results)
	})
}
var deleteUserById = function(id){
	user.delete(id).then((results)=>{
		console.log(results)
	})
}

