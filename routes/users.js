const router = require('koa-router')()
var userService = require('../service/userService.js')
router.prefix('/users')

router.post('/login', async function(ctx, next) {
    let param = ctx.request.body;
    let result = await userService.userLogin({ userName: param.userName });
    console.log(result)
    ctx.body = result;
    // if (result.success) {
    //     ctx.session.user = JSON.stringify({ userName: '123', })
    //     console.log(ctx.session)
    // }
    
    
})

router.get('/bar', function(ctx, next) {
    ctx.body = 'this is a users/bar response'
})

module.exports = router