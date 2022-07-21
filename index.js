require('dotenv').config();
const path = require('path');
const cors = require("cors");
const port = process.env.PORT || 4000;
const hbs = require("hbs");
const app = require('./src/app');

// hbs
const viewsPath = path.join(__dirname, './views');
app.set('view engine', 'hbs');
app.set('views', viewsPath)
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
