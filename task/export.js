/**
 * Created by mingli on 4/12/2016.
 */

var gulp = require('gulp');
var util = require('gulp-util');
var fs = require('fs-extra');
var path = require('path');
var _ = require('lodash');
var dotenv = require('dotenv');

var dataSrcDirPath = path.resolve('data');
var dataDestDirPath = path.resolve('build/data');
var confSrcDirPath = path.resolve('config');
var confDestDirPath = path.resolve('build/config');

gulp.task('export', (cb) => {
    fs.copySync(dataSrcDirPath, dataDestDirPath);
    fs.copySync(confSrcDirPath, confDestDirPath);

    let configPath = path.resolve('config/config.env');
    util.log(util.colors.green('Exporting environment file ') + util.colors.magenta(configPath));

    dotenv.config({path: path.resolve(configPath)});
    process.env['EXPORTED_TIMESTAMP'] = '' + new Date();

    var template = fs.readFileSync(path.resolve(__dirname, './template/app-settings.ts.tpl')).toString();
    var envCons = dotenv.parse(fs.readFileSync(configPath));

    var contents = '';
    _.each(envCons, function(entry, key){
        contents += ('public static get ' + key + '(): string { return \'' + entry + '\';}\n');
    });
    template = template.replace('$CONFIG$', contents);

    var constDestFilePath = path.resolve('app/client/config/app-settings.ts');
    util.log(util.colors.green('Generate angular 2 static settings to ') + constDestFilePath);

    fs.writeFileSync(constDestFilePath, template);

    cb();
});
