
import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
var sass = gulpSass(dartSass);
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import notify from 'gulp-notify'



gulp.task('sass', function () {
  return gulp.src('./styles/sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', notify.onError({
      title: "SASS Compile Error",
      message: "<%= error.message %>",
     })))
    .pipe(autoprefixer('last 2 version'))
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('../dist/styles'));
});
gulp.task('copy-html' , function () {
  return gulp.src('./index.html')
  .pipe(gulp.dest('../dist'));
})

gulp.task('watch', function () {
  gulp.watch('./styles/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./index.html', gulp.series('copy-html'));
});