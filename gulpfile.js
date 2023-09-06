const gulp = require('gulp');
const saas = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/style/main.scss')
        .pipe(saas({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./dist/style'));
        
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./dist/images'));
}


  exports.sass = gulp.parallel(styles);
  exports.watch = function() {
    gulp.watch('./src/style/*.scss', gulp.parallel(styles));
  };
