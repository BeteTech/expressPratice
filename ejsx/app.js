var express = require('express');
var app = express();

var data = [{
        'title': 'the first news',
        'time': '2019-01-01'
    },
    {
        'title': 'the second news',
        'time': '2019-02-01'
    }
];

app.set('view engine', 'ejs');

app.get('/news/:id', function (req, res) {
    var id = parseInt(req.params.id);
    res.render('content', data[id + 1]);
});

app.listen(3000);