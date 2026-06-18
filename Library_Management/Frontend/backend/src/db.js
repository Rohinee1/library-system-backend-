const Database = require("better-sqlite3");

const db = new Database("database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS users(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
email TEXT UNIQUE,
password TEXT
);

CREATE TABLE IF NOT EXISTS books(
id INTEGER PRIMARY KEY AUTOINCREMENT,
title TEXT,
author TEXT,
isbn TEXT,
quantity INTEGER
);

CREATE TABLE IF NOT EXISTS members(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
email TEXT,
phone TEXT
);

CREATE TABLE IF NOT EXISTS transactions(
id INTEGER PRIMARY KEY AUTOINCREMENT,
bookId INTEGER,
memberId INTEGER,
issueDate TEXT,
returnDate TEXT,
status TEXT
);

CREATE TABLE IF NOT EXISTS fines(
id INTEGER PRIMARY KEY AUTOINCREMENT,
memberId INTEGER,
amount REAL,
status TEXT
);
`);

module.exports = db;