const userList = require('../controllers/UserGetList.js');
const userAuth = require('../controllers/UserAuth.js');
const userReg = require('../controllers/UserReg.js');
const koaRouter = require('koa-router');
const router = koaRouter()

router.get('/user_list',  async (ctx,next) => {
	ctx.response.body = await userList(ctx);
});
router.post('/user_auth',async (ctx,next) => {
	ctx.response.body = await userAuth(ctx);
});
router.post('/user_reg',async (ctx,next) => {
	ctx.response.body = await userReg(ctx)
});

module.exports.router = router;