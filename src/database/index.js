const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/node_api_rest');

module.exports = mongoose;