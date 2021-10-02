const { json } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan');
const data = require('./sample.json');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Configurations
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
//Port Listening
app.listen(app.get('port'), ()=> {
    console.log(`Server running on port ${app.get('port')}`);
});

//Rutas

//The Current Date (GET)
app.get('/date', (req,res) =>{
    convertedDate = new Date().toString();
    res.send(convertedDate);
});
// Your full Name (GET)
app.get('/name', (req,res) =>{
    res.send(data.fullname);
});
//The city you live in (GET)
app.get('/city', (req,res) => {
    res.send(data.city);
});
//Your school (GET)
app.get('/school', (req,res) => {
    res.send(data.school);
});
//The sum of two numbers (POST)
//The multiplication of three numbers (POST)
//The area of a square (POST)
//The area of a triangle (POST)
