const express = require("express");
const router = express.Router();
const user = require("../models/usermodels");
// const CSV = require("../models/csv-model");
// const csv = require("csvtojson");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "fdnbgkd656d5g6dfgmnbdfjfg";
const userAuthentication = require("../middlewares/jwt-authentication");
const bodyParser = require("body-parser");

// const fileupload = require("express-fileupload");
const path = require("path");
// router.use(fileupload());
const cors = require("cors");

router.use(cors());

router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());
router.use("/user", userAuthentication);