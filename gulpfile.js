const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function styles() {
    return gulp.src('./style/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./dist/style'));
        
}
function scripts() {
    return gulp.src('./scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'));          
}
function HTML() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));      
}

exports.sass = gulp.parallel(styles, scripts, HTML);
exports.watch = function() {
    gulp.watch('./style/*.scss', gulp.parallel(styles));
    gulp.watch('./index.html', gulp.parallel(HTML));
    gulp.watch('./scripts/main.js', gulp.parallel(scripts)); 
};
