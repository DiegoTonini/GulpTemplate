'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var reload      = browserSync.reload;

//console.log("dirname is "+__dirname);
var src = {
    scss: __dirname+'/app/scss/*.scss',
    css:  __dirname+'/app/css',
    html: __dirname+'/app/*.html'
};
gulp.task('server',['sass'], function() {
  //__dirname = \exp

  browserSync.init({
      server: {
          baseDir: "./app",
          port: 3000
      }
  });

  gulp.watch(src.scss,['sass']);
  gulp.watch(src.html).on('change',reload);
});

gulp.task('sass', function() {
  console.log('load sass');

  return gulp.src(src.scss)
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest(src.css))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['server']);



// clean up if an error goes unhandled.
process.on('exit', function() {
    if (node) node.kill()
})
