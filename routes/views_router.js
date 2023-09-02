const express = require('express');
const { fileURLToPath } = require('url');
const path = require('path');

const views_router = express.Router();

// Removed due to type="module" removal from package.json
// Convert the current module's URL to a file path
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

views_router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../public/views/home.html');
    res.sendFile(filePath);
});

module.exports = views_router;