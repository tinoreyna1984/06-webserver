require('dotenv').config();
/* const express = require("express");
const app = express(); */
const cors = require("cors");
const port = process.env.PORT || 4000;
const hbs = require("hbs");
const app = require('./src/app');

// hbs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials'); // registrar partials

// CORS
app.use(cors());

// Rutas
app.get('/generic', (req, res) => {
    res.render('generic', {titulo: "Generic"});
});

app.get('/elements', (req, res) => {
    res.render('elements', {titulo: "Elements"});
});

// error 404
app.get('*', (req, res) => {
    res.status(404).sendFile(__dirname + "/public/404notfound.html");
});

// oyente de peticiones
app.listen(port, () => {
  console.log(`Estoy oyendo peticiones en el puerto ${port}`);
});
