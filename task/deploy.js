/**
 * Created by mingli on 4/12/2016.
 */

var gulp = require('gulp');
var util = require('gulp-util');
var exec = require('child_process').exec;
var fs = require('fs-extra');
var pm2Config = require('../pm2.config.json');

gulp.task('deploy', function(callback){
    exec('pm2 start pm2.config.json', function(err, stdout, stderr){
        if(err){
            util.log(util.colors.red(err));
            util.log(util.colors.red(stderr));
            util.log(util.colors.red('error in deploying to pm2'));
        }else{
            util.log(util.colors.green(stdout));
            util.log(util.colors.green('deployed the app to pm2'));
        }
        callback();
    });
});

gulp.task('redeploy', function(callback){
    exec('pm2 reload pm2.config.json', function(err, stdout, stderr){
        if(err){
            util.log(util.colors.red(err));
            util.log(util.colors.red(stderr));
            util.log(util.colors.red('error in redeploying to pm2'));
        }else{
            util.log(util.colors.green(stdout));
            util.log(util.colors.green('redeployed the app to pm2'));
        }
        callback();
    });
});

gulp.task('undeploy', function(callback){
    exec('pm2 delete ' + pm2Config.apps[0].name, function(err, stdout, stderr){
        if(err){
            util.log(util.colors.red(err));
            util.log(util.colors.red(stderr));
            util.log(util.colors.red('error in undeploying to pm2'));
        }else{
            util.log(util.colors.green(stdout));
            util.log(util.colors.green('undeployed the app to pm2'));
        }
        callback();
    });
});

gulp.task('save', function(callback){
    exec('pm2 save', function(err, stdout, stderr){
        if(err){
            util.log(util.colors.red(err));
            util.log(util.colors.red(stderr));
            util.log(util.colors.red('error in saving to pm2'));
        }else{
            util.log(util.colors.green(stdout));
            util.log(util.colors.green('saved the app to pm2'));
        }
        callback();
    });
});
