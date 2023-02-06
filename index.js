// Represents the api we are building
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json()); // middleware

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
)

app.get('/data', (req, res) => {
    res.status(200).send({ 
        name: 'John',
        age: '20'
    });
});

app.post('/data/id', (req, res) => {
    const { id } = req.params;
    const { surname } = req.body;

    if(!surname) {
        res.status(404).send({ message: "No surname found!" })
    }

    res.send({
        name: `John with your ${surname} and ID of ${id}`,
    })
});