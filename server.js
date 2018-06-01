var express = require('express')
var app = express()
var hbs = require('hbs');

// nos redirecciona a todos los archivos que estan en la carpeta publica
//son de dominio publico y todo el mundo puede verlo
require('./hbs/helpers');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/parciales');
app.use(express.static(__dirname + '/public'));

//express hbs
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send('Hello World');

    res.render('home', {
        nombre: 'kAtherine HerNandez MaRtin',


    });
})

app.get('/about', (req, res) => {
    //res.send('Hello World');

    res.render('about');
})


//si queremos agregar algo despues del '/' del url
/*
app.get('/data', (req, res) => {
    //res.send('Hello World');

    res.send('hola data');
})*/

app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
});