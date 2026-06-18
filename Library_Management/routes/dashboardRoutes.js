const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {

  const books =
    db.prepare(
      "SELECT COUNT(*) as total FROM books"
    ).get().total;

  const members =
    db.prepare(
      "SELECT COUNT(*) as total FROM members"
    ).get().total;

  const issued =
    db.prepare(
      "SELECT COUNT(*) as total FROM transactions"
    ).get().total;

  const fines =
    db.prepare(
      "SELECT IFNULL(SUM(amount),0) as total FROM fines"
    ).get().total;

  res.json({
    books,
    members,
    issued,
    fines
  });

});

module.exports = router;