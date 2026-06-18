const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {

  const members = db
    .prepare("SELECT * FROM members")
    .all();

  res.json(members);

});

router.post("/", (req, res) => {

  const {
    name,
    email,
    phone
  } = req.body;

  const result = db.prepare(
    `
    INSERT INTO members
    (name,email,phone)
    VALUES(?,?,?)
  `
  ).run(
    name,
    email,
    phone
  );

  res.json({
    id: result.lastInsertRowid,
    message: "Member Added"
  });

});

router.delete("/:id", (req, res) => {

  db.prepare(
    "DELETE FROM members WHERE id=?"
  ).run(req.params.id);

  res.json({
    message: "Member Deleted"
  });

});

module.exports = router;