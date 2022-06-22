const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const mongoose = require('mongoose');
const cors = require("cors");
const morgan = require("morgan");

// app listen on port 3000
const port = 5000;
app.listen(port, () => console.log("listening on port " + port));
app.get("/", (req, res) => res.send("Hello World!"));

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

// routes
const routes = require("./routes");
app.use("/books", routes);
