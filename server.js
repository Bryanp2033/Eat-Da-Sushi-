var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var app = express();

PORT = process.env.PORT || 8080

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

app.listen(PORT, function(){
    console.log("Currently listening to localhost:" + PORT);
})