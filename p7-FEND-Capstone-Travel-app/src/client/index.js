import  { getGeoCity, getImageURL, getWeatherForecast, getCountryInfo} from './js/app';

import { getCity, getTripStart, getTripEnd } from './js/form';

import { showModal, recentTrip } from './js/model';

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/style.scss';

import 'bootstrap';

const $ = require("jquery");


const trip = {};

const handleSave = async (event) => {
  event.preventDefault();

  try {
    const res = await fetch('http://localhost:8080/saveData',
      {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trip: trip })
      });
    if (res.ok) {
      const data = await res.json();
      recentTrip(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

const handleCancel = (event) => {
  event.preventDefault();
  $('#tripModal').modal('toggle');
  document.querySelector('.caption').style.display = 'block';
}

const handleSearch = async (e) => {
  e.preventDefault();

  trip.city = getCity();
  trip.start = getTripStart();
  trip.end = getTripEnd();

  const geocity = await getGeoCity(trip.city);

  trip.latitude = geocity.latitude;
  trip.longitude = geocity.longitude;
  trip.countryCode = geocity.countryCode;

  trip.weatherForecast = await getWeatherForecast(geocity.latitude, geocity.longitude, );

  const countryInfo = await getCountryInfo(trip.countryCode);

  trip.country = countryInfo.name;
  trip.countryFlag = countryInfo.flag;

  trip.image = await getImageURL(trip.city, trip.country);

  console.log(trip);

  showModal(trip);
}
/* Add event listeners */
document.getElementById('button_search').addEventListener('click', handleSearch);

document.querySelector('.trip_save').addEventListener('click', handleSave)

document.querySelectorAll('.trip_cancel').forEach(element => {
  element.addEventListener('click', handleCancel);
});