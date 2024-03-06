const express = require("express");
const router = express.Router();
const { languageController, movieController, theaterController } = require("../../controllers/index");

router.post("/movies", movieController.create);
router.get("/movies/:id", movieController.get);
router.delete("/movies/:id", movieController.destroy);
router.patch("/movies/:id", movieController.update);

router.post("/languages", languageController.create);
router.get("/languages/:id", languageController.get);
router.delete("/languages/:id", languageController.destroy);
router.patch("/languages/:id", languageController.update);

router.post("/theaters", theaterController.create);
router.get("/theaters/:id", theaterController.get);
router.delete("/theaters/:id", theaterController.destroy);
router.patch("/theaters/:id", theaterController.update);

module.exports = router;