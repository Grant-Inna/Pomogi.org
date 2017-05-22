var gulp = require('gulp'),
    csscomb = require('gulp-csscomb'),
    gcmq = require('gulp-group-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    notify = require("gulp-notify");


gulp.task('cssComb', function() {
    return gulp.src('./style.css')
        .pipe(csscomb())
        .pipe(gulp.dest('./'))
        .pipe(notify('cssComb Success!'));
});
gulp.task('autoprefixer', function() {
    return gulp.src('./style.css')
        .pipe(gcmq())
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 3%']}))
        .pipe(gulp.dest('../css'))
        .pipe(notify('Autoprefixer Success!'));
});
gulp.task('minCss', function() {
    return gulp.src('../css/style.css')
        .pipe(cleanCSS())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest('../css'))
        .pipe(notify('minCSS Success!'));
});

gulp.task('watch_cssComb', function() {
    gulp.watch('./style.css', ['cssComb'])
});
gulp.task('watch_autoprefixer', function() {
    gulp.watch('./style.css', ['autoprefixer'])
});
gulp.task('watch_min', function() {
    gulp.watch('../css/style.css', ['minCss'])
});


gulp.task('default', ['cssComb', 'autoprefixer', 'minCss', 'watch_min', 'watch_autoprefixer', 'watch_cssComb']);