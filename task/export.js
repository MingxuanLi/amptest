/**
 * Created by mingli on 4/12/2016.
 */

var gulp = require('gulp');
var fs = require('fs-extra');
var path = require('path');

var dataSrcDirPath = path.resolve('data');
var dataDestDirPath = path.resolve('build/data');
var confSrcDirPath = path.resolve('config');
var confDestDirPath = path.resolve('build/config');

gulp.task('export', (cb) => {
    fs.copySync(dataSrcDirPath, dataDestDirPath);
    fs.copySync(confSrcDirPath, confDestDirPath);
    cb();
});
