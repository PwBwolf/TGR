var gulp = require('gulp');

var gulpTypescript = require('gulp-typescript');
var gulpSourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var del = require('del');

var appDev = 'src-web/app/';
var appProd = 'public/js/src/';
var vendor = 'public/js/vendor';
var appDevNat = 'src-nativescript/app/src';
var appDevWeb = 'src-web/app/src/';


var tsconfig = gulpTypescript.createProject('tsconfig.json');

gulp.task('build-ts', function() {
    return gulp.src(appDev + '/**/*.ts')
        .pipe(gulpSourcemaps.init())
        .pipe(gulpTypescript(tsconfig))
        .pipe(gulpSourcemaps.write())
        .pipe(gulp.dest(appProd));
});

gulp.task('build-copy', function() {
    return gulp.src([appDev + '**/*.html', appDev + '**/*.htm', appDev + '**/*.css'])
        .pipe(gulp.dest(appProd));
});

gulp.task('clean', function() {
    del(appProd + '/**/*');
});

gulp.task('copy-web', function () {
  return gulp.src(appDevWeb + '/**/*.ts')
    .pipe(gulp.dest(appDevNat));
});

gulp.task('sass', function () {
    return gulp.src(appDev + '/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest(appProd));
})

gulp.task('vendor', function() {
    gulp.src('node_modules/@angular/**')
        .pipe(gulp.dest(vendor + '/@angular'));

    gulp.src('node_modules/es6-shim/**')
        .pipe(gulp.dest(vendor + '/es6-shim'));

    //reflect metadata
    gulp.src('node_modules/reflect-metadata/**')
        .pipe(gulp.dest(vendor + '/reflect-metadata/'));

    //rxjs
    gulp.src('node_modules/rxjs/**')
        .pipe(gulp.dest(vendor + '/rxjs/'));

    //systemjs
    gulp.src('node_modules/systemjs/**')
        .pipe(gulp.dest(vendor + '/systemjs/'));

    //ng2-bootstrap
    gulp.src('node_modules/ng2-bootstrap/**')
        .pipe(gulp.dest(vendor + '/ng2-bootstrap/'));

    //moment
    gulp.src('node_modules/moment/**')
        .pipe(gulp.dest(vendor + '/moment/'));

    //zonejs
    return gulp.src('node_modules/zone.js/**')
        .pipe(gulp.dest(vendor + '/zone.js/'));
});

gulp.task('watch', function() {
    gulp.watch(appDev + '**/*.ts', ['build-ts']);
    gulp.watch(appDev + '**/*.{html,htm,scss}', ['build-copy', 'sass']);
});

gulp.task('default', ['watch', 'build-ts', 'build-copy', 'vendor', 'sass']);
gulp.task('build', ['build-ts', 'build-copy', 'vendor']);
