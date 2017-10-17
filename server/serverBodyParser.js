const express = require("express");
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({extended: true}));

const singers = require("./src/singers");

app.route("/bands")
    .get(function(req, res) {
        console.log('Requested node server');
        res.json(singers);
})


app.listen(3000, function () {
    console.log('Bands Machine Server is running on port 3000!')
})
