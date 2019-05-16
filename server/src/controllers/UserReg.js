const userModel = require('../model/UserModel.js');

const reg = async function (ctx) {
	console.log(ctx.request.body.name);
	return result = await userModel.reg("test","test@test.ru","test");
}

module.exports = reg;