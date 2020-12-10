var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Rockwell Automation Inc. has a presence over world with head quarter in London and 17 offshore development centers. Company has 35000 employees all over world. Previously Rockwell automation had private cloud for their IT Solutions. Due to growth of company in all sectors , company wants to use Amazon Web Services public Cloud like Infrastructure as Service Rockwell has public Cloud subscription to use it as Infrastructure as a Service ( I-a-a-S) and Platform As A Service');
})




var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://localhost:8081", host, port)
})