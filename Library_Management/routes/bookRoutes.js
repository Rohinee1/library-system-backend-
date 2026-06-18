const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {

  const books = db
    .prepare("SELECT * FROM books")
    .all();

  res.json(books);

});

router.post("/", (req, res) => {

  const {
    title,
    author,
    isbn,
    quantity
  } = req.body;

  const result = db.prepare(
    `
    INSERT INTO books
    (title,author,isbn,quantity)
    VALUES(?,?,?,?)
  `
  ).run(
    title,
    author,
    isbn,
    quantity
  );

  res.json({
    id: result.lastInsertRowid,
    message: "Book Added"
  });

});

router.delete("/:id", (req, res) => {

  db.prepare(
    "DELETE FROM books WHERE id=?"
  ).run(req.params.id);

  res.json({
    message: "Book Deleted"
  });

});

module.exports = router;