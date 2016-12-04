/**
 * Created by mingli on 4/12/2016.
 */

'use strict';

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import _ from 'lodash';
import mongoose from 'mongoose';
import routes from './routes';
import Avatar from './models/avatars';

let avatars = require('../data/avatars.json');

let dotenvConfig = {
    path: __dirname + '/../../config/config.env'
};
dotenv.config(dotenvConfig);

mongoose.connect(process.env.MONGO_DB);

var app = express();
app.use(morgan('common'));
app.use(bodyParser.json());

let allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Expose-Headers', 'Origin, X-Requested-With, Content-Type, Accept, ACCESS-KEY');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, ACCESS-KEY');
    next();
};
app.use(allowCrossDomain);
app.use(cors());

routes(app);

let publicRouter = express.static(__dirname + '/../public');
app.use(process.env.FRONTEND_ROOT, publicRouter);
app.use('/', publicRouter);

let imgRoot = process.env.HOST + process.env.FRONTEND_ROOT + '/assets/';
avatars.forEach((avatar) => {
    avatar.imgSrc = imgRoot + avatar.imgSrc;
    Avatar.findOneAndUpdate({
        name: avatar.name
    }, avatar, {upsert: true}, (err, result) => {
        if(err){
            console.error(err);
        }
    });
});

// Set up env
var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('amptest running on port: ' + port);
})
