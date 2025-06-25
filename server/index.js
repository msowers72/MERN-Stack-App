const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const model = require('./table_schema')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/react_crud');

app.post('/addData', (req, res) => {
    const {name, email} = req.body;
    try {
        model.create({name, email})
        res.status(200).send("Data Stored Successfully")
    } catch(error) {
        res.status(500).send(error)
    }
})

// Fetching All Data
app.get('/getAllData', async (req, res) => {
    try {
        const user = await model.find()
        res.status(200).send(user)
    } catch(error) {
        res.status(500).send(error)
    }
})


app.listen(8000, () => {
    console.log("Server Is Running On Port 8000")
})