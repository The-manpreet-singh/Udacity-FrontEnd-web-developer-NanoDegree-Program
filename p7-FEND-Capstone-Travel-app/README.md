# Udacity Front End Development Nonodegree

# FEND-Capstone-Travel-App

## Live Url- https://capstone-travel-by-manpreet.netlify.app/

## Rules: project rubic (https://review.udacity.com/#!/rubrics/2669/view)

## Table of Contents

1. [About the Project](#about-the-project)
2. [API(s) Used](<#apis(s)-used>)
3. [Development Strategy](#development-strategy)
4. [Getting Started](#getting-started)
5. [Built With](#built-with)
6. [Test](#test)

## About the Project

In most cases of personal projects, it is very common to pull basic data from an external API. This is what we have accomplished so far in this nanodegree. However, many production-level applications do not rely on only a single source of data, they usually pull multiple data from various resources and make them available to different parts of the app asynchronously, so one API can use the data gathered from another API.

## API(s) Used

- [Geonames API](http://www.geonames.org/export/web-services.html) - Geographical database from which the location data is pulled
- [WeatherBit API](https://www.weatherbit.io/) - Weather API for current and future weather data
- [Pixabay API](https://pixabay.com/api/docs/) - RESTful interface for searching and retrieving free images and videos

## Development strategy

1. Setup Webpack Development Enviroment: For this, I have created a gist to follow along.
2. Setup a form where users can enter the trip destination and the dates
3. Pull data including lattitude, longtitude and country code from Geonames API using user input
4. Pass this data to Weatther API along with user entered dates to obtain weather information
5. Introduce a countdown to find out how many days to the trip
6. Use country code to pull country name and national flag usin REST Countries API
7. Use location and country name to pull images from Pixabay API

## Getting Started

1. Download or clone the project:

```
git clonehttps://github.com/The-manpreet-singh/Udacity-FrontEnd-web-developer-NanoDegree-Program.git [folder_name]
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

- [Bootstrap](https://getbootstrap.com/) - The CSS framework used
- [Sass](https://sass-lang.com/documentation) - The web framework used
- [Webpack](https://webpack.js.org/concepts/) - Asset Management
- [Babel](https://babeljs.io/) - JavaScript Compiler
- [Node.js](https://nodejs.org/en/) - JavaScript Runtime
- [Express.js](https://expressjs.com/) - Server Framework for Node.js
- [Jest](https://jestjs.io/) - Testing suit
- [Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers) - For offline capability

## Test

To test the application, run

```
npm run test
```
