const express = require("express")
const expresshb = require("express-handlebars")
const routes = require("./controllers/burgers_controller.js")
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.engine("handlebars", expresshb({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server is listening on http://localhost:" + PORT);
});