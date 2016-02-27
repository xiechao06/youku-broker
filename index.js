var koa = require('koa');
var json = require('koa-json');
var cofy = require('cofy');
var request = require('request-json');

var app = koa();

app.use(json()).use(function *(next) {
    var c = request.createClient('http://play.youku.com/');
    var rsp = (yield cofy.fn(c.get, true, c)(this.path.slice(1) + '?' + this.querystring))[1];
    rsp.data.user.vip = true;
    this.body = JSON.stringify(rsp);
    yield next;
});

app.listen(5000);
