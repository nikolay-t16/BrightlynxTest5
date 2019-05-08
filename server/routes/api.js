const api = require('../controllers/user.js');
const koaRouter = require('koa-router');
const router = koaRouter()

router.get('/user_list', api.getList);
router.post('/user_auth', api.auth);
router.post('/user_reg', api.reg);

module.exports.router = router;