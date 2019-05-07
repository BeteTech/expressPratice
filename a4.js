var express=require('express');

var app=express();

//select which router first
//router1

app.get('/:username/:id',function(req,res){
    res.end('username:'+req.params.username);
});

//router2
app.get('/admin/login',function(req,res){
    res.end('admin login in!');
});

app.listen(3000,'127.0.0.1');

//to solute this problem,use middleware
//see a5.js