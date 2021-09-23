// imports always go at the top
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
// import sass from 'gulp-sass'; TODO - configure this plugin

function compileSass(done) {
    return gulp.src('sass/**/*.scss') // grab everything in the sass folder
    .pipe(sass().on('error', sass.logError)) // run all our sass files thru the compiler
    .pipe(gulp.dest('css')); // save the compiled CSS file in its directory

    done();
}

function squashImages(done) {
    gulp.src('images/**') // grab everything in the images folder
		.pipe(imagemin()) // run every image through the imagemin engine
        .pipe(gulp.dest('images/dist')) // put the optimized images here
        
    done();
}

function sayHi(done) {
    console.log('hello from Gulp! Easy Peasy!');

    // you can do all kinds of fun stuff here
    done();
}

export { 
    sayHi as hello, 
    squashImages as crunch,
    compileSass as compile
}