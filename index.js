const server = require("./server.js");
const mongoose = require("mongoose");
const config = require("./config.js");
const PORT = process.env.PORT || 5789;


process.on("unhandledRejection", err => {
    console.log("unhandledRejection", err.message);
    //TODO: send the err to the logger.
    process.exit(1);
});

process.on("uncaughtException", err => {
    console.log("Uncaught Exception %s", err);
    //TODO: send the err to the logger.
    process.exit(1);
});

mongoose.Promise = global.Promise;
mongoose.connection
    .openUri(config.secrets().db)    
    .once("open", () => {
        console.log("MongoDB Connection is open.");
    }).on("error", e => {
        console.log("MongoDB Connection ERROR: %s", e);
        //TODO: send the err to the logger.
    });
server.listen(PORT, (err) => {
    if(err){
        return console.log(err);
    }    
    console.log("Auth Service| NODE_ENV: %s | PORT: %s", process.env.NODE_ENV, PORT);
});