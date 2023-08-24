import express, { request } from 'express'; // Import the Express library
import exercise1 from './routes/exercise1.js';
import exercise2 from './routes/exercise2.js';
import exercise3 from './routes/exercise3.js';
// import exercise4 from './routes/exercise4.js';
// import exercise5 from './routes/exercise5.js';
// import exercise6 from './routes/exercise6.js';
// import exercise7 from './routes/exercise7.js';
// import exercise8 from './routes/exercise8.js';

import views_routes from './routes/views_router.js';

const app = express(); // Create an instance of an Express application
const PORT = process.env.PORT || 3000; // Choose a port for your server

//Middleware to load static files
app.use(express.static('public'));
//Middleware which allows the request of json files
app.use(express.json());

app.use('/1', exercise1);
app.use('/2', exercise2);
app.use('/3', exercise3);
// app.use('/4', exercise4);
// app.use('/5', exercise5);
// app.use('/6', exercise6);
// app.use('/7', exercise7);
// app.use('/8', exercise8);

app.use('/views', views_routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});