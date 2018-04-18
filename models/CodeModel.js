var CodeSchema = require('../schemas/CodeSchema');
var mongoose = require('mongoose');

var CodeModel = mongoose.model('program',CodeSchema);
module.exports = CodeModel;