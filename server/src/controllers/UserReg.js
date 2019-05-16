const userModel = require('../model/UserModel.js');

const reg = async function (ctx) {
	return result = await userModel.reg(ctx.request.body.name, ctx.request.body.email, ctx.request.body.password);
}

module.exports = reg;