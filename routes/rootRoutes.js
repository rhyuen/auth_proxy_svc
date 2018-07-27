const router = require("express").Router();
const path = require("path");
const proxy = require("express-http-proxy");
const wrapAsync = require("../common/wrapasync");

router.get("/", wrapAsync(async (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../public/static/index.html"));
}));

router.get("/login", wrapAsync(async (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../public/static/login.html"));
}));

router.get("/signup", wrapAsync(async (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../public/static/signup.html"));
}));


router.get("/words", proxy("localhost:9774"));
router.get("/quotes", proxy("localhost:9934"));
router.get("/opendata", proxy("localhost:9123"));

module.exports = router;
