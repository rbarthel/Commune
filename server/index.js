"use strict";

require("dotenv").config();

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require('express');
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");


const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);
const morgan = require("morgan");
const knexLogger = require("knex-logger");

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");
const eventsRoutes = require("./routes/events");
const paymentRoutes = require("./routes/payment");

const app = express();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static('public'))


app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SESSION_SECRET || "development"]
  })
);

//Mount all resource routes
app.use("/api/users", usersRoutes(knex));
app.use("/api/events", eventsRoutes(knex));
app.use("/api/payment", paymentRoutes(knex));


app.listen(3001, () => {
  console.log('Listening on port 3001');
})