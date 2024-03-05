const express = require("express");
const router = express.Router();
const movieController = require("../../controllers/movie-controllers");

router.post("/movies", movieController.create);
router.get("/movies/:id", movieController.get);
router.delete("/movies/:id", movieController.destroy);
router.patch("/movies/:id", movieController.update);

module.exports = router;