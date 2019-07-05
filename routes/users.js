const router = require('koa-router')()
var userService = require('../service/userService.js')
router.prefix('/users')

router.post('/login', async (ctx, next)=> {
    let param = ctx.request.body;
    let result = await userService.userLogin(param);
    ctx.body = result
    
    
})

router.get('/bar', function(ctx, next) {
    ctx.body = 'this is a users/bar response'
})

module.exports = router