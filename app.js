const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, function() {
    console.log("Hola " + PORT);
})

app.get("/", function(req,res){
    res.send(`You are on the homepage.`);
})

app.post("/post", function(req,res){
    var user = req.body.user;
    res.send(`Welcome ${user}`);
})

app.delete("/delete", function(req,res){
    res.json(true);
})

app.put("/put/:id", function(req,res){
    var task = req.params.id;
    res.send(`Task ${task} has been updated`);
})
