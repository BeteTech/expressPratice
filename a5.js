var express = require('express');

var app = express();

app.get('/admin/login', function (req, res, next) {
    res.send('admin login in...');
    next();
});

app.get('/:user/:id', function (req, res) {
    res.send('username is ' + req.params.user);
});

app.listen(3000, '127.0.0.1');