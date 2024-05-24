//Cargar express
const express = require('express');
const rutas = express.Router();

//Cargar configurador de rutas
rutas.get('/', (req, res) => {
    console.log('estoy funcionando');
    res.render('index.ejs', {title : "Mi Agenda"});
});

rutas.get('/form', (req, res) => {
    console.log('estoy funcionando');
    res.render('form.ejs', {title : "Mi formulario"});
});

module.exports = rutas;