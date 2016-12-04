/**
 * Created by mingli on 4/12/2016.
 */

var gulp = require('gulp');
var util = require('gulp-util');
var fs = require('fs-extra');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var path = require('path');
var exec = require('child_process').exec;

gulp.task('clean', (cb) => {
    fs.removeSync(path.resolve('build'));
    cb();
});

gulp.task('build', ['clean', 'export', 'ng-build'], (cb) => {
    return gulp.src('app/server/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('build/server'));
});

gulp.task('ng-build', (cb) => {
    exec('ng build', {maxBuffer: 1024 * 500}, function(err, stdout, stderr){
        if(err){
            util.log(util.colors.red(err));
            util.log(util.colors.red(stderr));
            util.log(util.colors.red('error in ng building'));
        }else{
            util.log(util.colors.green(stdout));
            util.log(util.colors.green('ng build success'));
        }
        cb();
    });
});
