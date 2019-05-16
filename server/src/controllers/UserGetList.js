const userModel = require('../model/UserModel.js');
const getList = async function (ctx) {
	let result = await userModel.getList();
	return {
		result:result
	}
}

module.exports = getList;