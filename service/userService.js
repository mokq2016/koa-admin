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
var findUsers = async function(){
	 var result = await user.select()
	return new Result(true,result);
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
			return new Result(true,result[0]);
		}else{
			return new Result(false,null,'登录失败');
		}
	}else{
    
    if(result[0].password != obj.password){
      console.log('密码错误')
      return new Result(false,null,'密码错误')
    }else{
      return new Result(true,result[0]);
    }
		
	}
}
module.exports = {
	addUser,
	findUsers,
	deleteUserById,
	userLogin
}
