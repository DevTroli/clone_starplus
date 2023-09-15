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
function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(gulp.dest('./dist/scripts'));
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


  exports.sass = gulp.parallel(styles, scripts, HTML);
  exports.watch = function() {
    gulp.watch('./src/style/*.scss', gulp.parallel(styles));
    gulp.watch('./src/index.html', gulp.parallel(HTML));
    gulp.watch('./src/scripts/main.js', gulp.parallel(scripts));
  };
