var db = require('./Db');
const util = require('util');
const secret = "D9729FEB74992CC34"
const crypt = function (str) {
	var newstr = '';
	for (let i = 0; i < str.length; i++) {
		let char = str.charCodeAt(i) ^ secret.charCodeAt(i % str.length);
		newstr += String.fromCharCode(char);
	}
	return newstr;
}
const isUserExist = async function (email) {
	var res;
	//Создание асинхронной функции из db.query
	const query = util.promisify(db.query).bind(db);
	await (async () => {
		try {
			const rows = await query('SELECT id FROM `user` where email = "' + email + '" limit 1');
			res = rows.length > 0;
		} catch (e) {
			res = false;
		}
	})()
	return res;
}
const getList = async function () {
	var res;
	//Создание асинхронной функции из db.query
	const query = util.promisify(db.query).bind(db);
	await (async () => {
		try {
			let rows = await query('SELECT id, name, email FROM `user`');

			rows = rows.map(function (item) {
				item.email = crypt(item.email);
				return item;
			});
			res = rows;
		} catch (e) {
			res = [];
		}
	})();
	return res;
}

const reg = async function (name, email, password) {
	var error = "";
	if (name == "")
		error += "Введите имя. ";
	if (email == "")
		error += "Введите E-mail. ";
	if (password == "")
		error += "Введите пароль ";
	email = crypt(email);
	if ( await isUserExist(email))
		error += "Пользователь с таким E-mail уже зарегистрирован";
	if (error != "") {
		return {
			result: false,
			error: error
		}
	}

	var res;
	//Создание асинхронной функции из db.query
	const query = util.promisify(db.query).bind(db);
	await (async () => {
		try {
			await query('INSERT INTO `user` (name, email, password) VALUES ( ?, ?, ?)', [name, email, password]);
			res = {
				result: true
			};
		} catch (e) {
			res = {
				result: false,
				error: "Произошла техническая ошибка, обратитесь к админестратору"
			}
		}
	})()
	return res;
}

const auth = async function (email, password) {
	var error = "";
	if (email == "")
		error += "Введите E-mail. ";
	if (password == "")
		error += "Введите пароль ";
	if (error != "") {
		return {
			result: false,
			error: error
		}
	}
	email = crypt(email);
	var res;
	//Создание асинхронной функции из db.query
	const query = util.promisify(db.query).bind(db);
	await (async () => {
		try {
			const row = await query('SELECT id, name, email FROM `user` WHERE email = ? AND password = ? limit 1', [email, password]);
			if(row.length > 0){
				res = {
					result: true
				}
			} else {
				res = {
					result: false,
					error: "Пользователь с таким E-mail и паролем не найден"
				};
			}

		} catch (e) {
			res = {
				result: false,
				error: "Произошла техническая ошибка, обратитесь к админестратору"
			}
		}
	})()

	return res;
}
module.exports.getList = getList;
module.exports.reg = reg;
module.exports.auth = auth;