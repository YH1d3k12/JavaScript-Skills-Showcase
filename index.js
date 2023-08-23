import express, { request } from 'express'; // Import the Express library
import query1 from './routes/query1.js';
import query2 from './routes/query2.js';
import views_routes from './routes/views_router.js';

const app = express(); // Create an instance of an Express application
const PORT = process.env.PORT || 3000; // Choose a port for your server

//Middleware to load static files
app.use(express.static('public'));
//Middleware which allows the request of json files
app.use(express.json());

app.use('/query1', query1);
app.use('/query2', query2);
app.use('/views', views_routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});