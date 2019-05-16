const api = require('../controllers/user.js');
const koaRouter = require('koa-router');
const router = koaRouter()

router.get('/user_list',  async (ctx,next) => {
	ctx.response.body = await api.getList(ctx)
});
router.post('/user_auth',async (ctx,next) => {
	ctx.response.body = await api.auth(ctx)
});
router.post('/user_reg',async (ctx,next) => {
	ctx.response.body = await api.reg(ctx)
});

module.exports.router = router;