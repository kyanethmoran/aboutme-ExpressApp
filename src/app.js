//do these first
const express = require("express");
const path = require("path");
const app = express();


//once we make our partials and templates
const hbs = require("hbs");

const publicDirectoryPath = path.join(__dirname,"../public");
//make this and the app.use at line 20

//once we make our partials and templates
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//css
app.use(express.static(publicDirectoryPath))



//once app.use is made, make this
app.get("/served", (req, res) => {
    res.sendFile(publicDirectoryPath + "/html/index.html")
});


app.get("/aboutme", (req, res) => {
    res.render("aboutme", {
        // aboutme:"test"
    })
})

app.get("/hobbies", (req, res) => {
    res.render("hobbies", {
        // hobbies: "test"
    })
})

app.get("/socials", (req, res) => {
    res.render("socials", {
        // socials: "test"
    })
})

app.get("*", (req, res) => {
    res.send("Error 404: Page Not Found")
});


app.listen(5000, () => console.log("App is running on port 5000!"));