

import 'bootstrap';

const $ = require("jquery");

import { countdown } from './form';

const recentTrip = (trip) => {
  document.querySelector('.caption').style.display = 'block';
  document.querySelector('.caption').style.top = '5vh';
  $('#tripModal').modal('toggle');

  const tripStart = getTripDate(trip.start);
  const tripEnd = getTripDate(trip.end);
  const daysLeft = countdown(new Date(), trip.start);
  const weather = getWeatherInfo(trip.weatherForecast, daysLeft, tripStart);

  const div = document.createElement('div');
   div.classList.add('col-md-4');
   //section.appendChild(div);
  document.querySelector('.trips-container').appendChild(div);

  div.innerHTML = `
  <div class="col-md-12">
  <div class="card mb-12">

    <div class="row no-gutters">
      <div class="col-md-12">
        <img src="${trip.image}" class="card-img" alt="Picture of Travel Destination">
      </div>

      <div class="col-md-12">
        <div class="card-body">
          <h4 class="card-title trip_title"><img src="${trip.countryFlag}" class="flag"> ${trip.city}, ${trip.country}</h4>
          <h6 class="mt-0">Departure:<span style="color:crimson"> ${tripStart}</span></h6>
          <h6 class="mt-0">Return:<span style="color:crimson">${tripEnd}</span> </h6>
          <h6 class="mt-0">Duration:<span style="color:crimson"> ${countdown(trip.start, trip.end)}</span> days</h6>
          <span class="trip_countdown">Your trip to <span style="color:crimson">${trip.city} </span> is <span style="color:crimson">${daysLeft}</span>  days away</span>
          <p>Trip date weather: <span style="color:crimson">${weather.temperature}&deg;F</span>, <span style="color:crimson">${weather.summary}</span> </p>
        </div>
      </div>

    </div>
    <div class="clearfix"></div>
  </div>
 
  <div class="clearfix"></div>
  </div>`;
}


const showModal = (trip) => {
  
  document.querySelector('.caption').style.display = 'none';
  
  $('#tripModal').modal({
    keyboard: false
  })

  document.querySelector('.trip_title').innerHTML = `<img src="${trip.countryFlag}" class="flag"> ${trip.city}, ${trip.country}`;
  
  // Display city, dates and the duration
  document.querySelectorAll('.media_heading')[0].innerText = `${trip.city}, ${trip.country}`;
  
  //
  const tripStart = getTripDate(trip.start);
  const tripEnd = getTripDate(trip.end);
  document.querySelectorAll('.media_heading')[1].innerText = tripStart;
  document.querySelectorAll('.media_heading')[2].innerText = tripEnd;

  document.querySelectorAll('.media_heading')[3].innerText = `${countdown(trip.start, trip.end)} days`;

  // Display trip images
  // const imageURL = await getTripImageURL(images);
  document.querySelector('.images').setAttribute('src', trip.image);

  // Display the days left to trip
  const daysLeft = countdown(new Date(), trip.start);
  document.querySelector('.trip_countdown').innerText = `Your trip to ${trip.city} is ${daysLeft} days away`;

  // Display weather info
  const weather = getWeatherInfo(trip.weatherForecast,daysLeft, tripStart);
    document.querySelector('.trip_weather').innerHTML = `<p>Trip date weather: <span style="color:crimson">${weather.temperature}&deg;F</span>, <span style="color:crimson">${weather.summary}</span> </p>`;
  
}

const getWeatherInfo = (weatherForecast,daysLeft, date) => {
  
  const weather = {
    temperature: 0,
    summary: ''
  };

   weather.temperature = weatherForecast.data[daysLeft].temp;
   weather.summary = weatherForecast.data[daysLeft].weather.description;
  return weather;
}

const getTripDate = (date) => {
  const months = ["January",
                  "February",
                  "March", 
                  "April", 
                  "May", 
                  "June",
                  "July", 
                  "August", 
                  "September",
                  "October", 
                  "November", 
                  "December"];

  const days = ["Sunday", 
                "Monday", 
                "Tuesday", 
                "Wednesday", 
                "Thursday", 
                "Friday", 
                "Saturday"];

  const tripDate = new Date(date);

  const tripDateText = `${days[tripDate.getDay()]}, ${months[tripDate.getMonth()]} ${tripDate.getDate()}, ${tripDate.getFullYear()}`;

  return tripDateText;
}



export { showModal, recentTrip };
