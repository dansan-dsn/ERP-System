
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const bookRoute = require('./routes/books.route');

const app = express()
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/books', bookRoute);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));