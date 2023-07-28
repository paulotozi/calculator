const express = require("express");
const expressSanitizer = require("express-sanitizer");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/", express.static("public"));

var path = require('path');

app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log("Server started on port %s", PORT);
});