const request = require('request');
const express = require('express');
const cors = require('cors');

const taxidb = require('./models/taxi-datastore');
const app = express();
app.use(cors());

const TAXI_DATA_URL = 'https://api.data.gov.sg/v1/transport/taxi-availability';

app.get('/api/scrape', (req, res) => {
  request(TAXI_DATA_URL, (error, response) => {
    if (error) { return console.log(error); }
    // console.log(response);
    taxidb.create(response.body);
  });
  res.send("OK");
});

app.get('/api/get', (req, res) => {
  taxidb.getTaxi().then((data) => {
    res.send(data);
  });
});

app.get('/api/list', (req, res) => {
  let limit = req.query.limit || 5;
  taxidb.getTaxis(limit).then((data) => {
    res.send(data);
  });
});

app.get('*', (req, res) => {
  res.send('Hello World');
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('Example app');
});
