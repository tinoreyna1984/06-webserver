const express = require("express");
const app = express();

// Servir contenido estático
app.use(express.static('public'));
app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.render('home', {titulo: "Principal"});
});

module.exports = app;