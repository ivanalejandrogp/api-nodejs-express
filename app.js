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
app.post('/sum', (req,res) => {
    const nums = req.body;
    let n1 = parseInt(nums.num1);
    let n2 = parseInt(nums.num2);
    let suma = n1 + n2;
    let parsedSuma = suma.toString();
    res.send(parsedSuma);
});
//The multiplication of three numbers (POST)
app.post('/mult', (req,res) => {
    const nums = req.body;
    let n1 = parseInt(nums.num1);
    let n2 = parseInt(nums.num2);
    let n3 = parseInt(nums.num3);
    let mult = n1 * n2 * n3;
    let parsedMult = mult.toString();
    res.send(parsedMult);
});
//The area of a square (POST)
//The area of a triangle (POST)
