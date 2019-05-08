const userModel = require('../model/UserModel.js');
const getList = function (ctx) {
	ctx.body = userModel.getList();
}

const reg = function (ctx) {
	ctx.body = {
		result:1
	}
}

const auth = function (ctx) {
	ctx.body = {
		result:1
	}
}

module.exports.getList = getList;
module.exports.reg = reg;
module.exports.auth = auth;