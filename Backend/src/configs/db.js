require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb://khushboo:khushboo@ac-txtrrgk-shard-00-00.t4z9g8v.mongodb.net:27017,ac-txtrrgk-shard-00-01.t4z9g8v.mongodb.net:27017,ac-txtrrgk-shard-00-02.t4z9g8v.mongodb.net:27017/diamond?replicaSet=atlas-22qg4h-shard-0&ssl=true&authSource=admin"
  );
};
