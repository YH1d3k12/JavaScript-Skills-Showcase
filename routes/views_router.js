import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const views_router = express.Router();

// Convert the current module's URL to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

views_router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../index.html');
    res.sendFile(filePath);
});

export default views_router;