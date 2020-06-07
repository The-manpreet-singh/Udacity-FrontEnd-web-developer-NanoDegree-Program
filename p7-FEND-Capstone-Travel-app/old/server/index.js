var path = require('path')
const express = require('express')
require('dotenv').config()
//console.log(`${process.env.API_ID}`)
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const postRequest = './handle';
const GeoNames = 'api.geonames.org/postalCodeSearchJSON?';
const weatherAPI='api.weatherbit.io/v2.0/forecast/daily?'
const pixabayAPI = 'pixabay.com/api';
const axios = require('axios');



/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'))
app.use(cors());

console.log(__dirname)

// app.get('/', function (req, res) {
//     // res.sendFile('dist/index.html')
//     res.sendFile('dist/index.html')
// })

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// function to aggrogate the geoNames route, api key and url with zip search
const _fetchGeoNames = async (username, zipOrCity = '325204') => {
  // we build our data necessary for doing the fetch operation from weather api
  const cityOrPostal = getCityOrPostalCode(zipOrCity);
  const url = `http://${GeoNames}${cityOrPostal}&maxRows=10&username=${username}`;
  return axios.get(url).then(response => {
    return response.data.postalCodes[0];
  });
};

// Remember that you have to change your GeoNames URL constant if you do it this way
const getCityOrPostalCode = zipOrCity => {
  if (/\d/.test(zipOrCity.value)) {
    return 'postalcode=' + zipOrCity;
  } else {
    // Otherwise we simply expect it to be a city, and as above, do validation here if you want to
    return 'placename=' + zipOrCity;
  }
};

// geoNamesRoute
app.get('/geoNames', (req, res) => {
  const zip = req.query.zip;
  _fetchGeoNames(process.env.username, zip).then(response => {
    res.end(JSON.stringify(response));
    console.log(response)
  });
});

// function to aggrogate the Dark Sky route, api key and url with longitude/ latitude search
const _weather = async (zipCode = '325204', key, lat, long, time) => {
  // we build our data necessary for doing the fetch operation from weather api
  const code= getCityCode(zipCode)
  const url = `https://${weatherAPI}/?${code}/${key},${long},${time},${lat},${city}`;

  return await axios.get(url).then(response => {
    return response.data.daily.data[0];
  });
};

const getCityCode = zipCode => {
  if (/\d/.test(zipCode.value)) {
    return 'postal_code=' + zipCode;
  } else {
    // Otherwise we simply expect it to be a city, and as above, do validation here if you want to
    return 'placename=' + zipCode;
  }
};
// weather Route
app.get('/weather', (req, res) => {
  const time = req.query.timezone;
  const lat = req.query.lat;
  const long = req.query.lon;
  const city = req.query.city_name;

  _weather(process.env.key,city, lat, long, time).then(response => {
    res.end(JSON.stringify(response));
    console.log(response);
  });
});

//Pixabay API
const _pixabay = async (pixabay_key, image) => {
  // data necessary for doing the fetch operation from pixabay api
  const url = `https://${pixabayAPI}/?key=${pixabay_key}&q=${image}`;

  return await axios.get(url).then(response => {
    if (response.data.totalHits != 0) {
      return response.data.hits[0].largeImageURL;
    } else {
      return { error: 'no results' };
    }
  });
};

// Pixabay Route
app.get('/pixabay', (req, res) => {
  const picture = req.query.image;

  _pixabay(process.env.pixabay_key, picture).then(response => {
    res.end(JSON.stringify(response));
    console.log(response)
  });
});

module.exports = app;