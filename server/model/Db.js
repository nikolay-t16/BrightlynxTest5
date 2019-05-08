const mysql = require('koa-mysql');
const db = mysql.createPool({ user: 'root', password: '', database: 'test', host: 'localhost' });
module.exports = db;