const mongoose = require('mongoose')

const UserScehma = new mongoose.Schema({
  name: String,
  email: String,
  picture: String
})

module.exports = mongoose.model("User", UserSchema)
