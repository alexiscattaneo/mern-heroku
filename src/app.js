//inicia la variable express
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

//settings
app.set('port', process.env.PORT || 4000);


//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

var buildir = path.join(__dirname, '../frontend/build');
app.use(express.static(buildir));
app.get('/test', function(req,res){
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

console.log(path.join(__dirname, '../frontend/build', 'index.html'));

module.exports = app;