const userModel = require('../model/UserModel.js');

const auth = async function (ctx) {
	return result = await userModel.auth(ctx.request.body.email,ctx.request.body.password);
}

module.exports = auth;