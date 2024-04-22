const express = require("express");
const router = express.Router();


// Funds
const { getFunds, getFundsById, createFunds, updateFunds, deleteFunds } = require("../controllers/clothsController")

router.route("/").get(getFunds).post(createFunds);
router.route("/:id").get(getFundsById).put(updateFunds).delete(deleteFunds);

module.exports = router;
