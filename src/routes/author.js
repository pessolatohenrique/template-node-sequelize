const { Router } = require("express");
const AuthorController = require("../controllers/AuthorController");

const router = Router();

router.get("/", (req, res) => res.status(200).send({ message: "initial" }));
router.get("/author", AuthorController.index);
router.get("/author/:id", AuthorController.show);
router.get("/author/:id/restore", AuthorController.restore);
router.post("/author", AuthorController.store);
router.put("/author/:id", AuthorController.update);
router.delete("/author/:id", AuthorController.destroy);

module.exports = router;
