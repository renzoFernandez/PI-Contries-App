const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const axios = require('axios')
const {Country} = require('./db')

require('./db.js');

const server = express();

server.name = 'API';
axios('https://restcountries.com/v3/all')
.then(res => res.data)
.then(res => {
  res.forEach(el => Country.create({
    id : el.cca3,
    Nombre : el.name.common,
    Imagen_de_la_bandera: el.flags[1],
    Continente: el.continents[0],
    Capital: el.capital != null? el.capital[0] : 'No data',
    Subregion : el.subregion != null? el.subregion : 'No data',
    Area:el.area != null? el.area : 'No data',
    Poblacion:el.population
  }))
})

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
