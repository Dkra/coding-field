var gulp = require('gulp');
var gutil = require('gulp-util');
var $ = require('gulp-load-plugins')();
var cssnano = require('cssnano');
var del = require('del');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var babelify = require('babelify');
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
    // .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.autoprefixer({browsers: ['last 2 version']}))
    .pipe($.postcss(processors))
    // .pipe($.sourcemaps.write())
    // .pipe($.uglify())
    .pipe(gulp.dest(path.dest.css));
});

/*-----------------------------
  * Js
-----------------------------*/

gulp.task('js', function() {
  return browserify({
                entries: ['./js/become-better.js'],
                debug: true
            })
            .transform(["babelify",{presets: ["es2015"]}])
            .bundle()
            .on('error', function(e) {
              gutil.log(e);
            })
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./'))
            .pipe(browserSync.stream());
});

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
  const reloadList = ['./*.css', path.dest.html, path.dest.js];

  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 9999
  });

  gulp.watch(reloadList).on('change', browserSync.reload);
});



gulp.task('default', ['sync']);
