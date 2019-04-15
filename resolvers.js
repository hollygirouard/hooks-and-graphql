const user = {
  _id: "1",
  name: "Holly",
  email: "holly@hoopsbyholly.com",
  picture: "https://cloudinary.com/adsf"
}

module.exports = {
  Query: {
    me: () => user
  }
}
