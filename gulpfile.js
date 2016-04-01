// Gulp: Dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var size = require('gulp-size');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var jslint = require('gulp-jslint');
var sourcemaps = require('gulp-sourcemaps');
var header = require('gulp-header');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Header information
var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @author <%= pkg.author %>',
  ' * @copyright 2015 <themihel> Mischa Helfenstein | all rights reserved',
  ' */',
  ''].join('\n');

// Gulp-Task: styles
gulp.task('styles', function() {
  return gulp.src([
		'app/styles/app.scss'
	])
  .pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(concat('app.css'))
  .pipe(sourcemaps.write('../maps'))
  .pipe(gulp.dest('.tmp/styles/'))
  .pipe(uglifycss())
  .pipe(header(banner, {pkg: pkg}))
	.pipe(gulp.dest('dist/styles/'))
  .pipe(size({title: 'styles'}));
});

// Gulp-Task: scripts
gulp.task('scripts',function() {
  return gulp.src([
		'app/scripts/**/*.js'
	])
  // TODO: Tests!
  .pipe(sourcemaps.init())
	.pipe(concat('app.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('.tmp/scripts/'))
  .pipe(uglify({mangle: false}))
	.pipe(header(banner, {pkg: pkg}))
	.pipe(gulp.dest('dist/scripts/'))
  .pipe(size({title: 'scripts'}));
});

gulp.task('jslint', function() {
  return gulp.src([
		'app/scripts/**/*.js'
	])
  .pipe(jslint({
    node: true,
    evil: true,
    nomen: true,
    white: true,
    todo: true,
    vars: true,
    predef: {
      'angular': true,
      'browser': true,
      'window': true,
      'document': true
    },
  }))
  .on('error', function(error) {
    console.error(String(error));
  });
});

// Gulp-Task: images
gulp.task('images', function() {
  return gulp.src('app/images/**/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest('dist/images/'))
    .pipe(size({title: 'images'}));
});

// Gulp-Task: html
gulp.task('html', function() {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist/'))
    .pipe(size({title: 'html'}));
});

// Gulp-Task: copyJson
gulp.task('copyJson', function() {
  return gulp.src('app/**/*.json')
    .pipe(gulp.dest('dist/'))
    .pipe(size({title: 'copyJson'}));
});

// Gulp-Task: copyServiceWorker
gulp.task('copyServiceWorker', function() {
  return gulp.src('app/sw.js')
    .pipe(gulp.dest('dist/'))
    .pipe(size({title: 'copyServiceWorker'}));
});

// Gulp-Task: bower_components
gulp.task('bower', function() {
  return gulp.src('bower_components/**/*')
    .pipe(gulp.dest('dist/bower_components/'))
    .pipe(size({title: 'bower'}));
});

// Gulp-Task: clean
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

// Gulp-Task: serve:dist
gulp.task('serve:dist', ['dist'], function() {
  browserSync({
    server: 'dist'
  });

  gulp.watch(['app/styles/**/*.scss'], ['styles', reload]);
  gulp.watch(['app/scripts/**/*.js'], ['jslint', 'scripts', reload]);
  gulp.watch(['app/images/**/*'], ['images', reload]);
  gulp.watch(['app/**/*.html'], ['html', reload]);
  gulp.watch(['app/**/*.json'], ['copyJson', reload]);
});

// Gulp-Task: serve
gulp.task('serve', ['styles', 'jslint', 'scripts'], function() {
  browserSync({
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch(['app/styles/**/*.scss'], ['styles', reload]);
  gulp.watch(['app/scripts/**/*.js'], ['jslint', 'scripts', reload]);
  gulp.watch(['app/images/**/*'], reload);
  gulp.watch(['app/**/*.html'], reload);
  gulp.watch(['app/**/*.json'], reload);
});

// Gulp-Task: watch
gulp.task('watch', function() {
  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/scripts/**/*.js', ['jslint', 'scripts']);
});

// Gulp-Task: default
gulp.task('default', ['styles', 'jslint', 'scripts']);

// Gulp-Task: preserve
gulp.task('dist', ['html', 'copyJson', 'copyServiceWorker', 'styles', 'jslint', 'scripts', 'images', 'bower']);
