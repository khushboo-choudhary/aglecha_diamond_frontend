const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://khushboo:kkhushboo321>@cluster0.edtcl.mongodb.net/diamonds?retryWrites=true&w=majority");
};
