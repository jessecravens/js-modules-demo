
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration
app.configure(function(){
  app.use(express.static(__dirname + '/public'));

  // disable layout
  app.set("view options", {layout: false});

  // make a custom html template
  app.register('.html', {
    compile: function(str, options){
      return function(locals){
        return str;
      };
    }
  });
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', function(req, res){
  res.render("index.html");
});
app.get('/index.html', function(req, res){
  res.render("index.html");
});
app.get('/require.html', function(req, res){
  res.render("require.html");
});
app.get('/require-order.html', function(req, res){
  res.render("require-order.html");
});
app.get('/commonjs.html', function(req, res){
  res.render("commonjs.html");
});
app.get('/yui3.html', function(req, res){
  res.render("yui3.html");
});
app.get('/yepnope.html', function(req, res){
  res.render("yepnope.html");
});
app.get('/harmony.html', function(req, res){
  res.render("harmony.html");
});


app.listen(process.env.PORT || 3333);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);