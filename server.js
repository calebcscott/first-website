const express = require('express');
const media = require('./media.json');


const app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: "Homepage"
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "Homepage"
    })
})

app.get('/media', (req, res) => {
    let id = req.query.id;
    console.log(id);
    res.render('media', {
        title: "Homepage",
        pictures: media.pictures
    })
})

app.get('/media/:id', (req, res) => {
    const image = media.pictures.find(p => p.id === req.params.id);
    console.log(image);
    res.render('picture', {
        title: "Homepage",
        image
    })
})

const server = app.listen(7000, () => {
    console.log(`Express running -> PORT ${server.address().port}`)
})