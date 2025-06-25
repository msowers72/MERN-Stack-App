const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: String,
    email: String,
})

const model = mongoose.model('User_Info', schema);

module.exports = model