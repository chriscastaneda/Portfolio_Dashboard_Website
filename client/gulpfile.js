var gulp = require('gulp');//npm install gulp --save-dev
var concat = require('gulp-concat');//npm install --save-dev gulp-concat
var browserSync = require('browser-sync').create();//npm install browser-sync gulp --save-dev

//Localhost 3000
gulp.task('server', function (done) {
    browserSync.init({
        watch: true,//watch function
        ui: false, // Disable UI option
        notify: false, //disable "browserSync connected" popup
        server: ["./", "app"]
    });
    done();
});

//minify

//concat
gulp.task('scripts', async function () {

    /*Add html scripts here*/
    gulp.src(['node_modules/angular/angular.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'app/src/**/*.js'])
        .pipe(concat('build.js'))//rendering all project files
        .pipe(gulp.dest('gulp'))//folder location
});

gulp.task('watch', function () {//auto update
    gulp.watch('app/src/**/*.js', gulp.series('scripts'));
    gulp.watch('app/src/**/*.html');
});

//Default task "gulp" to start localhost
gulp.task('default', gulp.parallel('server', 'watch'));