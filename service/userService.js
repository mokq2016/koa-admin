var user = require('../model/user.js')
var moment = require('moment');
var Result = require('../util/result.js')
var addUser = async function(userObj){
	var result = await user.insert({
    userName:userObj.userName,
    password:userObj.password,
		createTime:moment().format('YYYY-MM-DD hh:mm:ss'),
		address:''
	})
	return result.length == 0 ? false:true
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

var userLogin = async function(obj){
	var result = await user.selectByName(obj.userName);
	if(result.length == 0){
		if(addUser(obj)){
			return new Result(true,result);
		}else{
			return new Result(false,null,'登录失败');
		}
	}else{
		return new Result(true,result);
	}
}
module.exports = {
	addUser,
	findUsers,
	deleteUserById,
	userLogin
}
