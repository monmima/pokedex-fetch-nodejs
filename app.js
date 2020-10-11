
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser'); // needed to read the content from the form

// using express and the body-parser module
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * EJS
 * concatenate the current working directory
 * and a folder called views
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/**
 * serving static files from the "public" folder
 * this includes: image, HTML and JS files, etc.
 */
app.use(express.static(path.resolve(__dirname, 'public')));

/**
 * EJS template 2
 */
app.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.status(200).render("one-page", {
        node : {
            dirname: __dirname,
            filename: __filename,
            id: req.params.id,
        }
    });
    
});

/**
 * Index
 */
app.get('/', (req, res) => {
    res.status(200).render("index-page");
});

/**
 * EJS template 3
 */
app.get('/index', (req, res) => {
    res.status(200).render("index");
});

/**
 * handling 404 errors
 * source: https://expressjs.com/en/starter/faq.html
 */
app.use(function (req, res, next) {
    res.status(404).send("404 - Sorry can't find that!")
});

app.listen("3000", () => {
    console.log("Server started on port 3000");
});