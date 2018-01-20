var express = require("express");
var router = express.Router();

var db = require("../queriesEventParticipants");

router.get("/", db.getAllEventParticipants);
router.get("/:id", db.getParticipantsOfEvent);
router.post("/", db.createEventParticipant);
router.delete("/:event_id/:user_id", db.removeEventParticipant);

module.exports = router;
