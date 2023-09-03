const express = require('express');
const views_routes = require('./routes/views_router.js');

const app = express(); // Create an instance of an Express application
const PORT = process.env.PORT || 3001; // Choose a port for your server

//Middleware to load static files
app.use(express.static('public'));
//Middleware which allows the request of json files
app.use(express.json());


app.use('/views', views_routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});