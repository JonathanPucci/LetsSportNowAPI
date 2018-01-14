// ./routes/index.js
const users = require("./user");
const events = require("./events");
const spots = require("./spots");

module.exports = app => {
  app.use("/api/users", users);
  app.use("/api/events", events);
  app.use("/api/spots", spots);
  // etc..
};
