import express, { request } from 'express'; // Import the Express library

const app = express(); // Create an instance of an Express application

// Define routes and middleware here...

const PORT = process.env.PORT || 3000; // Choose a port for your server

// app.get("/", (req, res) => {
//     res.send(console.log("Hello World!"));
// });

// app.get('/', (_, res) => {
//     res.json({ message: 'Batata!' });
// });

app.get('/api/:id', (req, res) => {
    const nome = req.query.nome; //Vai depois doi params
    const id = req.params.id; //Vem antes do query

    res.json
    ({ 
        message: `Você passou o queryParam ${nome} `+
        `Você passou o id:${id}` 
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});