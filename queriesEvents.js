var db = require("./dbconnection").db;

// add query functions
function getAllEvents(req, res, next) {
  db
    .any('select * from "Events"')
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL Events"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function getSingleEvent(req, res, next) {
  var eventID = parseInt(req.params.id);
  db
    .one('select * from "Events" where "Event_ID" = $1', eventID)
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ONE Event"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function createEvent(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db
    .none(
      'insert into "Events"("Location_latitude", "Location_longitude", "Description", "Photo", "Date", "Host_ID", "Spot_ID", "Participants_min", "Participants_max", "Participants_number","Sport")' +
        "values(${Location_latitude}, ${Location_longitude}, ${ Description}, ${ Photo}, ${ Date}, ${ Host_ID}, ${ Spot_ID}, ${ Participants_min}, ${ Participants_max},${ Participants_number}, ${ Sport})",
      req.body
    )
    .then(function() {
      res.status(200).json({
        status: "success",
        message: "Inserted one Event"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function updateEvent(req, res, next) {
  db
    .none("update pups set name=$1, breed=$2, age=$3, sex=$4 where id=$5", [
      req.body.name,
      req.body.breed,
      parseInt(req.body.age),
      req.body.sex,
      parseInt(req.params.id)
    ])
    .then(function() {
      res.status(200).json({
        status: "success",
        message: "Updated Event"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function removeEvent(req, res, next) {
  var pupID = parseInt(req.params.id);
  db
    .result("delete from pups where id = $1", pupID)
    .then(function(result) {
      /* jshint ignore:start */
      res.status(200).json({
        status: "success",
        message: `Removed ${result.rowCount} Event`
      });
      /* jshint ignore:end */
    })
    .catch(function(err) {
      return next(err);
    });
}

module.exports = {
  getAllEvents: getAllEvents,
  getSingleEvent: getSingleEvent,
  createEvent: createEvent,
  updateEvent: updateEvent,
  removeEvent: removeEvent
};
