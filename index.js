import express, { request } from 'express'; // Import the Express library
import { fileURLToPath } from 'url'; // Import the fileURLToPath function from the 'url' module
import path from 'path';

const app = express(); // Create an instance of an Express application
const PORT = process.env.PORT || 3000; // Choose a port for your server

// Convert the current module's URL to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Middleware to load static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public/views/home.html');
    res.sendFile(filePath);
});

app.get('/api/:id', (req, res) => {
    const nome = req.query.nome; //Vai depois doi params
    const id = req.params.id; //Vem antes do query

    res.json
    ({ 
        message: `Você passou o queryParam ${nome} `+
        `Você passou o id:${id}` 
    });
});

app.get('/views/query1', (req, res) => {
    let num1 = parseFloat(req.query.num1);
    let num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2))
    {
        res.status(501).json({
            message: `Ensira dois números`
        });
        return;
    }
    else
    {
        res.json({
            message: `Resultado: ${num1 + num2}`
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});