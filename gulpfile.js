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
function HTML() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));      
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
    gulp.watch('./src/style/*.scss', gulp.series(styles));
  };
