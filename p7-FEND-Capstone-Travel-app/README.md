# Weather-Journal App Project

Udacity Front-End Web Developer Nano-degree - Web APIs and Asynchronous Applications (Project-3): Weather-Journal App

Project Rubric: [rubric](https://review.udacity.com/#!/rubrics/2669/view)

## Install

Run the command 'npm install' to install required dependencies  (npm install express, npm install body-parser).

## What this project encompassses:

- Webpack entry point
- Webpack output and dist folder
- Webpack Loaders
- Webpack Plugins
- Webpack Mode
- Tools for convenient Webpack development
- Sass, Jest (JS Unit Testing), Aylien API, html, css, packagr.json, prod/dev webpack configurations

## How to run

Terminal NPM start

    "start": "npm run client-prod && npm run server-prod",

    following which, in the browser, go to http://localhost:8081/ to recieve the application.

To run this app, the server must be actioned through, 'npm run start', not through the index.js server directory as this will omit the api key. Then an instance of webpack must be run in the terminal, upon doing so the application should open within a browzer window. uSE, 'Webpack build-dev' to access the development build or, 'Webpack build-prod' t oaccess the finished production application.

npm run start (to instance the server)

npm run build-dev (to run the development mode of the app)

npm run build-prod (to run the production mode of the app)

Upon downloading the app file you will also need to cd into the folder and:

- `npm install`
- `npm start` to start the app
- this app runs on localhost:8080, but you can of course edit that in server.js
