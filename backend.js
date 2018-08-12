const express = require('express');     
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config');

const app = express();

mongoose.connect(config.database,  {useNewUrlParser: true }, err => {
    if(err){
        console.log("Error in conncting to Database");
    }else{
        console.log("Connected to Database");
    }
});

app.use(bodyParser.json());                         
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());

const newsRoutes = require('./routes/entryfeed');
app.use('/api/entryfeeds', newsRoutes);

app.listen(config.port, err => {
    console.log("LiveSafe backend working on port: " + config.port);
});