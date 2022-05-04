const express = require("express");
const app = express();

require("../src/db/connect.js");
require("../src/models/userMessage.js");
// const Register = require("../src/models/register.js");


const port = process.env.PORT || 3000;
const hbs = require("hbs");

const path = require("path");
const Newregistration = require("../src/models/userMessage.js");
const static_path = path.join(__dirname, "../public");
const tempath = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');

// console.log(static_path);
app.use(express.static(static_path));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set("views", tempath);

hbs.registerPartials(partials_path);


app.get('/', (req, res) => {
    res.render('index')
});
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.post('/contact', async (req, res) => {
    try {
        const newreg = new Newregistration({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
        })
        await newreg.save();
        res.status(201).render('index');

    }
    catch {
        res.status(400).send("Some error occured");
    }

});

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
});