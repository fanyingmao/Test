const Koa = require('koa');
const Router = require('koa-router');
const compose = require('koa-compose');
const app = new Koa();
const router = new Router();

// response
router.get('/get', function(ctx) {
    ctx.body = 'get';
});

router.all('/api/*',compose([async (ctx, next) => {
    console.log('api');
    await next();
}
,async (ctx, next) => {
    console.log('xxxx');
    await next();
}]));


app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);