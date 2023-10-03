const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function styles() {
    return gulp.src('./src/style/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./dist/style'));
        
}
function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'));          
}

exports.sass = gulp.parallel(styles, scripts);
exports.watch = function() {
    gulp.watch('./src/style/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/main.js', gulp.parallel(scripts)); 
};
