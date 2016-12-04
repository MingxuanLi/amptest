/**
 * Created by mingli on 4/12/2016.
 */

import avatarsRouter from './controllers/avatars';

let routes = (app) => {

    app.use((req, res, next) => {
        if(req.originalUrl.indexOf(process.env.BACKEND_ROOT) > -1){
            let accessKey = req.headers['access-key'];
            if(accessKey !== process.env.ACCESS_KEY){
                var error = new Error();
                error.message = 'Bad Request';
                error.name = 'BadRequest';
                next(error);
            }
        }
        next();
    });

    app.use(process.env.BACKEND_ROOT + '/avatars', avatarsRouter);

    app.use((err, req, res, next) => {
        res.status(400).send(err.message);
    });
};

module.exports = routes;
