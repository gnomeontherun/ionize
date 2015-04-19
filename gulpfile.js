var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

var path = ['app/**'];

gulp.task('watch', function () {
  gulp.watch(path, function () {
    gulp.src(path)
      .pipe(connect.reload());
  });
});

gulp.task('default', ['connect']);
