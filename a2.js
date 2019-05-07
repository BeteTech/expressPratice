var express = require('express');

var app = express();

var a = 100;

app.get('/', (req, res) => {
    a++;
    res.send(a.toString());
});

app.listen(3000,'127.0.0.1');