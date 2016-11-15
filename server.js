var express = require('express');
var app = express();
const PORT = 1337;

const HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

app.get('/api/heroes', function(req,res,next){
	res.json(HEROES);
})


app.use(function(req,res,next){
    res.sendFile('index.html', {
        root: __dirname + '/'
    })
})

app.use(function(err,req,res,next){
	console.error(err);
	res.sendStatus(500);
})

app.listen(PORT, function(){
	console.log("heroes api listening on port: " + PORT);
})