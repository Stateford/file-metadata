// server.js
//
// MODULES
// ===============
require("dotenv").config();
const express = require("express");
const path = require("path");
//const bodyParser = require("body-parser");
const morgan = require("morgan");
const multer = require("multer");
const upload = multer();
const app = express();

// set up app
app.use(morgan("dev"));
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());


// server static files
app.use("/", express.static(path.join(__dirname + "public")));

app.get("/", function(req, res) {
    console.log(`${__dirname}/public/index.html`);
    res.sendFile(`${__dirname}/public/index.html`);
});



app.post("/", upload.single('file'), function(req, res) {

    try {
        res.json({ bytes :req.file.size});
    } catch(e) {
        res.send("Could not get file size");
    }

});

// start server
app.listen(process.env.PORT);
console.log("server is listening to port: " + process.env.PORT);
