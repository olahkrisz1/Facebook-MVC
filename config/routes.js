const express = require("express");
const router = express.Router();
const feedController = require("../controllers/feedController");

// Routes
router.get("/feed", feedController.index);
router.post("/feed", feedController.create);
router.get("/feed/:id", feedController.show);
router.get("/feed/:id/edit", feedController.edit);
router.post("/feed/:id/edit", feedController.update);
router.get("/feed/:id/delete", feedController.delete);

module.exports = router;
