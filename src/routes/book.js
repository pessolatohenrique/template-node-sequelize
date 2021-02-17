const { Router } = require("express");
const BookController = require("../controllers/BookController");

const router = Router();

router.get("/book", BookController.index);
router.get("/book/sumPagesByAuthor", BookController.sumPagesByAuthor);
router.get("/book/countByAuthor", BookController.countByAuthor);
router.get("/book/:id", BookController.show);

module.exports = router;
