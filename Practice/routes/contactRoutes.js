const express = require("express");
const router = express.Router();

// CLOTHS 
const { getCloths, getClothsById, createCloths, updateCloths, deleteCloth } = require("../controllers/clothsController")

// Define routes for Cloths
router.route("/cloth").get(getCloths).post(createCloths);
router.route("/cloth:id").get(getClothsById).put(updateCloths).delete(deleteCloth);

// Funds
 const { getFunds, getFundsById, createFunds, updateFunds, deleteFunds }  = require("../controllers/fundControllers")

 router.route("/fund").get(getFunds).post(createFunds);
 router.route("/fund/:id").get(getFundsById).put(updateFunds).delete(deleteFunds);


// Stationary
const { getStationary, getStationaryById, createStationary, updateStationary, deleteStationary }  = require("../controllers/stationaryController")

router.route("/stationary").get(getStationary).post(createStationary);
router.route("/stationary/:id").get(getStationaryById).put(updateStationary).delete(deleteStationary);

module.exports = router;
