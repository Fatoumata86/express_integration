const express = require("express")
const app = express()

const port = 8000

const exphbs = require("express-handlebars")

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'));

app.get("/index.html", (req, res) => {
    res.render('home')
})

app.get("/contact.html", (req, res) => {
    res.render('home')
})

app.get("/page2.html", (req, res) => {
    res.render('home')
})

app.get("/post.html", (req, res) => {
    res.render('home')
})

app.get("/recipe.html", (req, res) => {
    res.render('home')
})

app.get("/team-member.html", (req, res) => {
    res.render('home')
})

app.get("/team.html", (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
})