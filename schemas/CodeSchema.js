
var mongoose = require('mongoose');
var CodeSchema = new mongoose.Schema(
    {
        name: String,
        type: String
    }
);
module.exports = CodeSchema;