var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require('gutil');
var watch = require('gulp-watch');
var configuration = require('./webpack.config.js');
var batch = require('gulp-batch');

gulp.task("webpack", function(callback) {
    // run webpack
    webpack(configuration, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task('watch', function () {
    watch('src/**/*.*', batch(function (events, done) {
        gulp.start('webpack', done);
    }));
});