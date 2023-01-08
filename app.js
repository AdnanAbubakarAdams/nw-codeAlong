// Define our route handlers here
// Seperations of concerns

// import express library
const express = require('express');

// initialize express app
const app = express();

// Define our routes

// Healthcheck route
app.get('/', (req, res) => {
    res.send('Server is guuccci');
})

module.exports = app;