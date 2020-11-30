
const express = require('express')
const app = express()
const port = 3000

var beerList = require('./beers/beers.json');


app.get('/beers', function (req, res) {
    console.log('Received request for beers from', req.ip)
    res.json(beerList);
});

app.get('/beer/:beerId', function (req, res) {
    console.log('Received request for ' + req.param('beerId') + ' from', req.ip)
    var beerDetails = require('./beers/' + req.param('beerId') + '.json');
    res.json(beerDetails);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
