# Udacity Front End Development Nonodegree 

# FEND-Capstone-Travel-App

## Table of Contents

1. [About the Project](#about-the-project)
2. [API(s) Used](#apis(s)-used)
3. [Development Strategy](#development-strategy)
4. [Additional Features](#additional-features)
5. [Getting Started](#getting-started) 
6. [Built With](#built-with)
7. [Test](#test)
8. [Licence](#licence)

## About the Project

In most cases of personal projects, it is very common to pull basic data from an external API. This is what we have accomplished so far in this nanodegree. However, many production-level applications do not rely on only a single source of data, they usually pull multiple data from various resources and make them available to different parts of the app asynchronously, so one API can use the data gathered from another API.

The project will include a simple form where you enter the location you are travelling to and the date you are leaving. If the trip is within a week, you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast. The OpenWeather API that was used in the Weather Journal App project is great, however, the weather forecast future is not included in the free tier, so we use DarkSky API in this project. DarkSky API is specific in terms of the location and it only accepts coordinates of the location to pull weather information. For that, we are using Geonames API that lets us obtain latitude and longitude of the location we'd like to travel. As you can see, in our API, for us to pull the weather data, first we need to get the location information from a different API. Once we have all of this data, we use Pixabay API to display an image of the location entered. I also added a feature where we use the REST Countries API to display the national flag of the country. Also, I find out that not so well-known locations do not bring up any pictures from the API, in this case, I set up the logic to make another API call to bring up a picture for the country.

## API(s) Used

* [Geonames API](http://www.geonames.org/export/web-services.html) - Geographical database from which the location data is pulled
* [DarkSky API](https://darksky.net/dev) - Weather API for current and future weather data
* [Pixabay API](https://pixabay.com/api/docs/) - RESTful interface for searching and retrieving free images and videos

## Development strategy

1. Setup Webpack Development Enviroment: For this, I have created a gist to follow along. This helps me to understand how the     dependencies interact with each other and what tools I need for specific task. Link to initial setup guideine can be found below:
   [Setting up a Webpak Development Environment using Node and Npm](https://gist.github.com/saltamay/443ae5ee02027c01fd9aba7a61c1ab57)
2. Setup a form where users can enter the trip destination and the dates
3. Pull data including lattitude, longtitude and country code from Geonames API using user input
4. Pass this data to DarkSky API along with user entered dates to obtain weather information
5. Introduce a countdown to find out how many days to the trip
6. Use country code to pull country name and national flag usin REST Countries API
7. Use location and country name to pull images from Pixabay API

## Additional Features

1. Add end date and display length of the trip
2. Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).
3. Integrate the REST Countries API to pull in data for the country being visited.
4. Users can review the trip info and cancel before saving it.
  
   The following features proposed:
    1. Allow user to add multiple destinations on the same trip.
         - Pull in weather for additional locations.
    2. Allow the user to add hotel and/or flight data.
         - Multiple places to stay. Multiple flights.
    3. Use Local Storage to save the data so that when they close, then revisit the page, their information is still there.
    4. Instead of just pulling a single day forecast, pull the forecast for multiple days.
    5. Incorporate icons into forecast.
    6. Allow user to Print their trip and/or export to PDF.
    7. Allow the user to add a todo list and/or packing list for their trip.
    8. Allow the user to add additional trips (this may take some heavy reworking, but is worth the challenge).
         - Automatically sort additional trips by countdown.
         - Move expired trips to bottom/have their style change so it’s clear it’s expired.

## Getting Started

1. Download or clone the project:
```
git clone https://github.com/saltamay/travel-app.git [folder_name]
```
2. Install dependencies
```
npm install --save-dev
```
3. Start the server
```
npm start
```
4. Setup the environment development or production
```
npm run build-dev
```
or 
```
npm run build-prod
```
5. Test with Jest
```
npm run test
```

## Built With

* [Bootstrap](https://getbootstrap.com/) - The CSS framework used 
* [Sass](https://sass-lang.com/documentation) - The web framework used
* [Webpack](https://webpack.js.org/concepts/) - Asset Management
* [Babel](https://babeljs.io/) - JavaScript Compiler
* [Node.js](https://nodejs.org/en/) - JavaScript Runtime
* [Express.js](https://expressjs.com/) - Server Framework for Node.js
* [Jest](https://jestjs.io/) - Testing suit
* [Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers) - For offline capability

## Test

To test the application, run
```
npm run test
```

Test cases are created using Jest. There are currently 3 test files. First file tests for asynchronous API call through the express server to 'POST' the trip information to the server. The server receives the request, updates the Array that holds the information for the trips and sends the Array back to the client so we can update the UI with the saved trips. Jest documentation suggests that we should create mocks for our asynchronous tests. For save trip functionality, we created a mock request file that returns a promise if the trip info is sent with the request. Basically, this mimics the 'POST' request that has the trip info attached to its body. The server promise resolves after updating the trips array and sends the array back to the client. So, if we are testing for the following trip object:
```
trip = {
   city: 'Paris',
   countryCode: 'FR',
   country: 'France'
 }
 ```
Server should receive this object, update the array, return back the array. Our test should expect to have an array with one element in it so if we 
```console.log(response[0].city) //We should expect to see 'Paris'```. 
Or with Jest 
```expect(response[0].city).toEqual('Paris');``` 
or for that matter 
```expect(response[0].countryCode).toEqual('FR');``` 
or ```expect(response[0].country).toEqual('France');```.

![Server Test](/docs/demo_testcase1.gif?raw=true)

The second test case is for making sure that the getCity() function is not case-sensitive. To test dynamic HTML with Jest, we need to reconstruct the part of our index.html that we want to test and have our test cases to target that specific part. Our getCity() function gets the user input from an input field with the id of the city. We reconstructed this in our code and gave it the value of "pARis". getCity() function should return "Paris" no matter what the input is. So, for that matter, it should return "Paris" for "PARIS" or "paris":
```
document.body.innerHTML =
      '<div id="city">' + 'pARis' + '</div>';

const city = getCity();
expect(city).toEqual('Paris');
```
![Case-insensitive input](/docs/demo_testcase2.gif?raw=true)

The third test file tests our express server making sure that all 'POST' and 'GET' routes/endpoints are working. First, we make sure that our 'POST' route is working properly so we can save the trip information received from the external API(s). Server receives the request and send back the trip information along with the status code '201'. Second we test for 'GET' route for getting home page. Everytime we refresh the page, route received the request and sends back the 'index.html' along with the status code '200'.

![Server Tests](/docs/demo_testcase3.gif?raw=true)

## License
This project is licensed under the MIT License - see the LICENSE.md file for details
