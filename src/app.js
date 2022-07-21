const express = require("express");
const app = express();

// Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {titulo: "Principal"});
});

module.exports = app;