var db = require("./dbconnection").db;

// add query functions
function getAllFieldSpots(req, res, next) {
  db
    .any('select * from "FieldSpots"')
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL FieldSpots"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function getFieldsOfSpot(req, res, next) {
  var spotID = parseInt(req.params.id);
  db
    .one('select * from "FieldSpots" where "Spot_ID" = $1', spotID)
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved fields of spot" + spotID
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function createFieldSpot(req, res, next) {
  db
    .none(
      'insert into "FieldSpots"("Spot_ID","Field_ID")' +
        "values(${Spot_ID},${Field_ID})",
      req.body
    )
    .then(function() {
      res.status(200).json({
        status: "success",
        message: "Inserted one FieldSpot"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function removeFieldSpot(req, res, next) {
  var userid = parseInt(req.params.user_id);
  var eventid = parseInt(req.params.event_id);
  db
    .result(
      'delete from "FieldSpots" where "Field_ID"= $1 AND "Spot_ID"= $2',
      userid,
      eventid
    )
    .then(function(result) {
      /* jshint ignore:start */
      res.status(200).json({
        status: "success",
        message: `Removed ${result.rowCount} FieldSpot`
      });
      /* jshint ignore:end */
    })
    .catch(function(err) {
      return next(err);
    });
}

module.exports = {
  getAllFieldSpots: getAllFieldSpots,
  createFieldSpot: createFieldSpot,
  removeFieldSpot: removeFieldSpot,
  getFieldsOfSpot: getFieldsOfSpot
};
