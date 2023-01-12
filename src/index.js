const express = require("express");
const app = express();
const port = 8081;
const mongoose = require("mongoose");
const contact = require("../datamodel/contacts");
const bodyParser = require("body-parser");
const routes = require("../routes/userRoutes");
app.use(routes);


app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);


app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
  
  mongoose.connect(
      process.env.MONGODB_URI
    )
    .then(() => console.log("db connected"));