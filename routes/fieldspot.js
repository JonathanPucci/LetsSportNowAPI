var express = require("express");
var router = express.Router();

var db = require("../queriesFieldSpot");

router.get("/", db.getAllFieldSpots);
router.get("/:id", db.getSingleFieldSpot);
router.post("/", db.createFieldSpot);
router.put("/:id", db.updateFieldSpot);
router.delete("/:id", db.removeFieldSpot);

module.exports = router;
