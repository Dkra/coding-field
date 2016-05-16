var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var cssnano = require('cssnano');
var del = require('del');
var browserSync = require('browser-sync').create();

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
    scripts: ['src/js/**/*.js'],
    images: 'src/images/**/*',
  },
  desc: {
    path: 'build/',
    html: 'build/**/*.html',
    css: './',
    js: 'become-better.js'
  }
};

/*-----------------------------
  * Clean
-----------------------------*/

gulp.task('clean', function() {
  return del([path.desc.path]);
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
    .pipe(gulp.dest(path.desc.path));
});

/*-----------------------------
  * Sass
-----------------------------*/

gulp.task('sass', function() {
  return gulp.src(path.src.sass)
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(path.desc.css));
});

/*-----------------------------
  * PostCss
-----------------------------*/

gulp.task('css', function() {
  var processors = [
    cssnano()
  ];

  return gulp.src(path.desc.css)
    // .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.autoprefixer({browsers: ['last 2 version']}))
    .pipe($.postcss(processors))
    // .pipe($.sourcemaps.write())
    // .pipe($.uglify())
    .pipe(gulp.dest(path.desc.css));
});

/*-----------------------------
  * Js
-----------------------------*/

gulp.task('js', function() {
  return gulp.src(path.scripts)
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ['es2015']
    }))
    // .pipe($.uglify())
    // .pipe($.concat('main.js'))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(path.desc.js));
});

/*-----------------------------
  * Images
-----------------------------*/

gulp.task('images', ['clean'], function() {
  return gulp.src(path.src.images)
    .pipe($.imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(path.desc.images));
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
  gulp.watch(path.desc.css, ['css']);
  gulp.watch(path.src.scripts, ['js']);
  // gulp.watch(path.images, ['images']);
});

/*-----------------------------
  * BrowserSync
-----------------------------*/

gulp.task('sync', ['watch'],function() {
  // Reload List
  const reloadList = ['./*.css', path.desc.html, path.desc.js];

  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 9999
  });

  gulp.watch(reloadList).on('change', browserSync.reload);
});



gulp.task('default', ['sync']);
