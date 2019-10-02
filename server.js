const request = require('request');
var air_data = require("./models/air_data_model") 
const mongoose = require('mongoose');

const port = 3000;
const express = require('express');
let app = express()
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

 let db = mongoose.connection;

app.get('/node', async (req, res) =>{ 
    let a = await air_data.find().where('_id').exec((err, resp)=> {res.send(resp);})
    // res.send(a);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


