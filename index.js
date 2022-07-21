require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const hbs = require("hbs");

console.log(process.env.PORT);

// hbs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials'); // registrar partials

// Servir contenido estático
app.use(express.static("public"));

// CORS
app.use(cors());

// Rutas
app.get('/', (req, res) => {
    res.render('home', {titulo: "Principal"});
});

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
