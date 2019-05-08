var db = require('./Db');
const  getList = async function(){
	//Не удалось выбрать польователей из базы.
	let rows = await db.query('SELECT * FROM `user`');
	return rows;
}
module.exports.getList = getList;