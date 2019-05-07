/// <reference path="./node_modules/@types/node/index.d.ts" />
/// <reference path="./node_modules/@types/express/index.d.ts" />

var express = require('express');
var fs = require('fs');
var app = express();

app.use(haha);
app.get('/', (req, res) => {
    res.end('the end.');
});
app.listen(3000);

function haha(req, res, next) {
    var filePath = req.originalUrl;
    fs.readFile('./public/' + filePath, (err, data) => {
        if (err) {
            next();
            return;
        }
        res.send(data.toString());
    });
    // next();
}