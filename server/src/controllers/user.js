const userModel = require('../model/UserModel.js');
const getList = async function (ctx) {
	let result = await userModel.getList();
	return {
		result:result
	}
}

const reg = async function (ctx) {
	console.log(ctx.request.body.name);
	return result = await userModel.reg("test","test@test.ru","test");
}

const auth = async function (ctx) {
	return result = await userModel.auth("test@test.ru","test");
}

module.exports.getList = getList;
module.exports.reg = reg;
module.exports.auth = auth;