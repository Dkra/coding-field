var gulp = require('gulp');
var gutil = require('gulp-util');
var $ = require('gulp-load-plugins')();
var cssnano = require('cssnano');
var del = require('del');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var assign = require('lodash.assign');
/*****************************
  * Tasks

  - clean
  - jade
  - sass
  - postcss
  - js
  - images
  - build
  - watch
  - sync

*****************************/

var path = {
  // source
  src: {
    jade: 'src/jade/**/*.jade',
    sass: './sass/*.sass',
    scripts: ['js/*.js'],
    images: 'src/images/**/*',
  },
  dest: {
    path: 'build/',
    html: './*.html',
    css: './',
    js: './*.js'
  }
};

/*-----------------------------
  * Clean
-----------------------------*/

gulp.task('clean', function() {
  return del([path.dest.path]);
});

/*-----------------------------
  * Jade
-----------------------------*/

gulp.task('jade', function() {
  var config = {
      pretty: true
  };

  return gulp.src(path.src.jade)
    .pipe($.jade(config))
    .pipe(gulp.dest(path.dest.path));
});

/*-----------------------------
  * Sass
-----------------------------*/

gulp.task('sass', function() {
  return gulp.src(path.src.sass)
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(path.dest.css));
});

/*-----------------------------
  * PostCss
-----------------------------*/

gulp.task('css', function() {
  var processors = [
    cssnano()
  ];

  return gulp.src(path.dest.css)
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.autoprefixer({browsers: ['last 2 version']}))
    .pipe($.postcss(processors))
    .pipe($.sourcemaps.write())
    // .pipe($.uglify())
    .pipe(gulp.dest(path.dest.css));
});

/*-----------------------------
  * Js
-----------------------------*/
var customOpts = {
  entries: ['./js/become-better.js'],
  debug: true,
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));
b.transform(["babelify",{presets: ["es2015"]}]);
gulp.task('js', bundle);
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./'));
}
/*-----------------------------
  * Images
-----------------------------*/

gulp.task('images', ['clean'], function() {
  return gulp.src(path.src.images)
    .pipe($.imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(path.dest.images));
});

/*-----------------------------
  * Build
-----------------------------*/

gulp.task('build', ['clean', 'jade', 'sass', 'css', 'js', 'images']);

/*-----------------------------
  * Watch
-----------------------------*/

gulp.task('watch', function() {
  // gulp.watch(path.jade, ['jade']);
  gulp.watch(path.src.sass, ['sass']);
  gulp.watch(path.dest.css, ['css']);
  gulp.watch(path.src.scripts, ['js']);
  // gulp.watch(path.images, ['images']);
});

/*-----------------------------
  * BrowserSync
-----------------------------*/

gulp.task('sync', ['watch'],function() {
  // Reload List
  const reloadList = ['./*.css', path.dest.html, 'bundle.js'];

  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 8888
  });

  gulp.watch(reloadList).on('change', browserSync.reload);
});

gulp.task('default', ['sync']);
