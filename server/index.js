const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT} `)
  })

app.get("/", (req, res) => {
    res.send('API Running')
    res.download("AstralOdyssey.exe");
});

app.get('/about', (req, res) => {
    res.send('This is my about route..... ')
  })

// Export the Express API
module.exports = app;