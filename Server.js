const express = require('express');
const app = express();
require('dotenv').config();
const { HOST, PORT } = process.env;


app.use(express.static('src'));
app.get('/', (req, res) => {
    res.sendFile('./src/index.html');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));