const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("../models/userModel");
db.role = require("../models/roleModel");

db.role.estimatedDocumentCount().then((err, count) => {
  if (!err && count != 3) {
    new db.role({
      name: "manager",
    })
      .save()
      .then(() => {
        console.log("added 'manager' to roles collection");
      })
      .catch((err) => {
        console.log("error", err);
      });

    new db.role({
      name: "client",
    })
      .save()
      .then(() => {
        console.log("added 'client' to roles collection");
      })
      .catch((err) => {
        console.log("error", err);
      });

    new db.role({
      name: "livreur",
    })
      .save()
      .then(() => {
        console.log("added 'livreur' to roles collection");
      })
      .catch((err) => {
        console.log("error", err);
      });
  }
});

module.exports = db;
