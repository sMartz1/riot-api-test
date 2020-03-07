const express = require('express');
const dtenv = require('dotenv').config();
const axios = require('axios');


const app = express();

const port = process.env.PORT || 5000;
const rankedQuery = "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/";


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/summoner/', (req, res) => {

	axios.get('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+req.query.name +process.env.API_KEY)
        .then(response => {

        res.send({
            summoner :response.data
           
        });
                 
        })
        .catch(error => {
            console.log(error);
           
        });

        

    console.log("Mensaje proporcionado por /summoner");
});

app.get('/ranked/', (req, res) => {
    var ranked = [];
    axios.get(rankedQuery+req.query.id + process.env.API_KEY)
        .then(response => {

           ranked = response.data;
            console.log(response.data);  
                 
        })
        .catch(error => {
            console.log(error);
           
        });

        res.send({
            rankedS : ranked
           
        });

    console.log("Mensaje proporcionado por /summoner");
});

app.listen(port, () => console.log(`Listening on port ${port}`));