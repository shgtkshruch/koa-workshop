
var koa = require('koa');
var escape = require('escape-html');

var app = module.exports = koa();

app.use(function* (next) {
  yield next;
  // add some logic here!
  this.response.body = escape(this.response.body);
})

app.use(function* body() {
  this.response.body = 'this following HTML should be escaped: <p>hi!</p>';
});
