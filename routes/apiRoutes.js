var path = require('path');



module.exports = function(app){


    var newSushi = require("../data/newSushi.js")
    var eatenSushi = require("../data/eatenSushi.js")

    app.post('/api/new', function(req, res){

        var userBody = req.body

        newSushi.push(userBody);
        // console.log("NEW SUSHI: " + userBody.sushi);
        res.json(newSushi);
        // console.log(newSushi);
    });

    app.post('/api/eaten', function(req, res){

        var userBody = req.body;
        // console.log(userBody)

        eatenSushi.push(userBody);
        console.log("EATEN SUSHI: " + userBody.sushi);
        res.json(eatenSushi);
    });
}