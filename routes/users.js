const router = require('koa-router')()
var userService = require('../service/userService.js')
router.prefix('/users')

router.get('/login', async function(ctx, next) {
    let param = ctx.request.body;
    //let result = await userService.userLogin({ userName: '124' });
    ctx.session['user'] = JSON.stringify({ userName: '123' }) 
    ctx.body = 'hello world'
    // if (result.success) {
    //     ctx.session.user = JSON.stringify({ userName: '123', })
    //     console.log(ctx.session)
    // }
    
    
})

router.get('/bar', function(ctx, next) {
  console.log(ctx)
    ctx.body = 'this is a users/bar response'
})

module.exports = router