// Require Modules
const express = require('express');
const cors = require('cors');
const axios = require('axios');
//grab env variables
require("dotenv").config;

// GET PORT FROM ENV OR DEFAULT PORT
const PORT = process.env.PORT || "2021"

// Create the Express App
const app = express();


// Configure the App (app.set)

// We'll use the ejs view engine
app.set('view engine', 'ejs'); 

// Mount Middleware (app.use)
app.use(cors())
app.use(express.json())


/////////////////////////////////
// Mount Routes/Controller
/////////////////////////////////

app.get('/yelpAPI/search/:term', (req, res) => {
    
    axios.get(`https://api.yelp.com/v3/businesses/search?location=Naperville&term=${req.params.term}`, {
        method: 'GET',
        headers: {
            //DO NOT USE IN PRODUCTION WITH TOKEN VISIBLE. FOR TESTING USE ONLY.
            Authorization: 'Bearer P3L1Qf8aRLDqjV-fvQ8oXUuE7CShyBmXuGnsr150cSBF409pJ6t50vX56dx6ev2t_mo09r_rlKLboqOUq6gJl1DXelstFAOrNRbfp5cEMhCBmmbi82Gm4hBKLtDsYHYx',
            "accept": "application/json",
            "x-requested-with": "xmlhttprequest",
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json',
        }
        }).then(response => {
            res.json(response.data)
        })
        .catch(err => console.log(err)
    )
});



// Tell the App to Listen on Port 3000
app.listen(PORT, function() {
    console.log('Express is listening on port 3001');
});