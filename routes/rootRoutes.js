const router = require("express").Router();
const path = require("path");
const proxy = require("express-http-proxy");
const {extServices} = require("../config.js");
const wrapAsync = require("../common/wrapasync");

const externalServices = extServices();

router.get("/", wrapAsync(async (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../public/static/index.html"));
}));

router.get("/login", wrapAsync(async (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../public/static/login.html"));
}));

router.get("/signup", wrapAsync(async (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../public/static/signup.html"));
}));


router.get("/words", proxy(externalServices.words);
router.get("/quotes", proxy(externalServices.auth));
router.get("/opendata", proxy(externalServices.opendata));

module.exports = router;
