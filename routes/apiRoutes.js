var path = require('path');



module.exports = function(app){


    var newSushi = require("../data/newSushi.js")

    app.post('/api/new', function(req, res){

        var userBody = req.body

        newSushi.push(userBody);
        console.log(newSushi);
        res.json(newSushi);
    });
}