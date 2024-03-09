const express = require("express");
const router = express.Router();
const { languageController, movieController, theaterController } = require("../../controllers/index");
const MovieMiddleware = require("../../middlewares/movie-middleware");

router.post("/movies", MovieMiddleware.movieCreateMiddleware, movieController.create);
router.get("/movies/:id", movieController.get);
router.get("/movies", movieController.getAll);
router.delete("/movies/:id", movieController.destroy);
router.patch("/movies/:id", MovieMiddleware.movieUpdateMiddleware, movieController.update);

router.post("/languages", languageController.create);
router.get("/languages/:id", languageController.get);
router.delete("/languages/:id", languageController.destroy);
router.patch("/languages/:id", languageController.update);

router.post("/theaters", theaterController.create);
router.get("/theaters/:id", theaterController.get);
router.get("/theaters", theaterController.getAll);
router.delete("/theaters/:id", theaterController.destroy);
router.patch("/theaters/:id", theaterController.update);

module.exports = router;