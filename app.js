const express = require('express');
const sum = express();
sum.set("view engine", "ejs");
sum.use(express.static(__dirname + '/public'))
sum.get('/', function(req, res) {
    let card = {
        titel: "home page",
        contain: "home",
    }
    res.render("templatel", card)
})

sum.get('/action', function(req, res) {
    let card = {
        titel: "form page",
        contain: "form",
    }
    res.render("templatel", card)
})

sum.get('/PRODUCT', function(req, res) {
    let card = {
        titel: "product page",
        contain: "PRODUCT",
    }
    res.render("templatel", card)
})

sum.get('/resister', function(req, res) {
    let card = {
        titel: "register page",
        contain: "resister",
    }
    res.render("templatel", card)
})

sum.get('/login', function(req, res) {
    let card = {
        titel: "register page",
        contain: "login",
    }
    res.render("templatel", card)
})

const port = 4000;
sum.listen(port, function() {
    console.log("completed", port);
});