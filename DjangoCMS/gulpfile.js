'use strict';
var appConfig = {
    rootPath: require('./bower.json').appPath || 'app',
    dist: 'public'
  };
  
var _ = require('underscore.string')
  , gulp = require('gulp')
  , $ = require('gulp-load-plugins')({
    pattern: [
      'del',
      'gulp-*',
      'main-bower-files',
      'nib',
      'streamqueue',
      'uglify-save-license',
      'wiredep',
      'yargs'
    ]
  })
  , sourceFile ={
        sass:[appConfig.rootPath + '/styles/{,*/}*.scss'],
        js:[appConfig.rootPath + '/js/{,*/}*.js']
      
    };
 
gulp.task('sass', function () {
    gulp.src(sourceFile.sass)
        .pipe($.sass())
        .pipe(gulp.dest(appConfig.dist + '/styles'));
});

gulp.task('css-minify', function () {
    gulp.src(appConfig.dist + '/styles')
        .pipe($.cssmin())
        .pipe($.rename({suffix: '.min'}))
        .pipe(gulp.dest(appConfig.dist + '/styles'));
});
 
gulp.task('clean-dist', function () {
  return gulp.src(appConfig.dist, {read: false})
    .pipe($.clean());
});

gulp.task('copy-to-dist', function () {
  return gulp.src(appConfig.rootPath + '/{,*/}*.*')
        .pipe($.copy(appConfig.dist));
});
 
gulp.task('watch', function() {
    //console.log("watching");
    gulp.src(sourceFile.sass)
        .pipe($.watch(sourceFile.sass))
        .pipe($.sass())
        .pipe(gulp.dest(appConfig.dist + '/styles'))
        .pipe($.filter(appConfig.dist + '/styles/*.css'))
        .pipe($.cssmin())
        .pipe($.rename({suffix: '.min'}))
        .pipe(gulp.dest(appConfig.dist + '/styles'));
});

gulp.task('validate', function() {
    // validate javascript
    gulp.src(sourceFile.js)
        .pipe($.jshint('.jshintrc'))
        .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('build',['clean-dist', 'sass', 'css-minify']);

gulp.task('test-local',['build', 'validate', 'watch']);

gulp.task('test',['build', 'validate']);
