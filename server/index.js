const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

app.listen(8000, () => {
    console.log("Server Is Running On Port 8000")
})