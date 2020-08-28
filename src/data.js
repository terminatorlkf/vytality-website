const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false}));

app.use(bodyParser.json);

app.listen(3000, function(){
    console.log("Listening on 3000")
});

app.post('/subscribe', function(req, res){
    console.log(req.body.email);
    res.end('Success')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('Server Started'));
