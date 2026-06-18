require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Library Management Backend Running"
  });
});

app.get("/api/dashboard", (req, res) => {
  res.json({
    books: 2540,
    members: 1250,
    issued: 745,
    fines: 8500
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});