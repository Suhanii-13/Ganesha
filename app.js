require('dotenv').config();

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const ejsMate = require("ejs-mate");

app.set("view engine", "ejs");
app.engine('ejs', ejsMate);
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});