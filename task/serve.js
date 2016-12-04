/**
 * Created by mingli on 4/12/2016.
 */

var gulp = require('gulp');
var util = require('gulp-util');
var nodemon = require('gulp-nodemon');
var argv = require('yargs').argv;
var _ = require('lodash');
var path = require('path');

var appPath = path.resolve('build/server/app.js');

gulp.task('serve', ['build'], (cb) => {
    nodemon({
        script: appPath,
        ext: 'ts js html css styl',
        env: {},
        ignore: ['task/', 'build/'],
        tasks: ['build']
    }).on('restart', () => {
        util.log(util.colors.magenta('the app is restarted'));
    });
    cb();
});
