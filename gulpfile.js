/**
 * Created by mingli on 4/12/2016.
 */

var gulp = require('gulp');
var util = require('gulp-util');
var path = require('path');
var fs = require('fs');
var listing = require('gulp-task-listing');
var _ = require('lodash');

var taskDir = __dirname + '/task';
_.each(fs.readdirSync(taskDir), function(file){
    var filePath = path.resolve(taskDir, file);
    if(fs.lstatSync(filePath).isFile()){
        require(filePath);
    }
});

gulp.task('default', ['list']);

gulp.task('list', listing.withFilters(/:/));
