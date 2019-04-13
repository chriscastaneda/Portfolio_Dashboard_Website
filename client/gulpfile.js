var gulp = require('gulp');//npm install gulp --save-dev
var concat = require('gulp-concat');//npm install --save-dev gulp-concat

gulp.task('gulpscripts', async function () {

    /*Add html scripts here*/
    gulp.src(['node_modules/angular/angular.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'app/src/**/*.js'])
        .pipe(concat('build.js'))//rendering all project files
        .pipe(gulp.dest('gulp'))//folder location
})

gulp.task('watch', function () {//auto update
    gulp.watch('app/src/**/*.js', gulp.series('gulpscripts'))
})