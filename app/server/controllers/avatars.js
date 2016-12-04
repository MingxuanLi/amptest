/**
 * Created by mingli on 4/12/2016.
 */

import express from 'express';
import Avatar from '../models/avatars';

let router = express.Router({
    mergeParams: true
});

router.get('/', (req, res, next) => {
    let query = {};
    if(req.query.filter){
        query.name = {$regex : '.*' + req.query.filter.toLowerCase() +'.*'};
    }
    Avatar.find(query, (err, results) => {
        if(err){
            next(err);
        }else{
            res.json(results);
        }
    });
});

module.exports = router;
