const { json } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), ()=> {
    console.log(`Server running on port ${app.get('port')}`);
});

//Rutas
app.get('/date', (req,res) =>{
    convertedDate = new Date().toString();
    res.send(convertedDate);
});