const userModel = require('../model/UserModel.js');

const auth = async function (ctx) {
	return result = await userModel.auth("test@test.ru","test");
}

module.exports = auth;