const mongoose = require('mongoose');

const LoginSchema = mongoose.Schema({
   userName:String,
   password:String
},);

module.exports = mongoose.model('Login', LoginSchema);
