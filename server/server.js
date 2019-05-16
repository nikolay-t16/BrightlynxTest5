'use strict';
const api = require('./src/routes/api');
const Koa = require( 'koa');
const cors = require('koa-cors');

const koaRouter = require( 'koa-router');

const app = new Koa();
const router = koaRouter();
router.use('/api', api.router.routes());

app.use(cors());
app.use(router.routes());
app
	.use(ctx => {
		ctx.body = 'KOA API!'
	})
	.listen(3001);