// the api
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json()); // middleware

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
)

const data = [
    { name: 'John', age: '20'},
    { name: 'Jane', age: '21'}
]

app.get('/data', (req, res) => {
    res.status(200).send({ data })
});

app.post('/data/:id', (req, res) => {
    const { id } = req.params;
    const { surname } = req.body;

    if(!surname) {
        res.status(418).send({ message: "No surname found!" })
    }

    res.send({
        name: `John with surname ${surname} and ID of ${id}`,
    })
});