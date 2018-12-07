const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

let app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home'
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact.hbs', {
        title: 'Contact'
    })
})

app.listen(port, ()=> {
    console.log(`Server is up on port ${port}`)
});
