/**
 * Created by mingli on 4/12/2016.
 */

import mongoose from 'mongoose';

let avatarSchema = new mongoose.Schema({
    name: String,
    imgSrc: String,
    timestamp: Date
});
avatarSchema.pre('save', function(next){
    if(!this.timestamp){
        this.timestamp = new Date();
    }
    next();
});

let Avatar = mongoose.model('Avatar', avatarSchema);

module.exports = Avatar;
