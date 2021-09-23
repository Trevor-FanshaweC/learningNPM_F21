// imports always go at the top
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import sass from 'gulp-sass'; 
import dart from 'sass'; // this is the dart-sass compiler

const sassify = sass(dart); // configure the sass plugin to work with the dart sass compiler

function compileSass(done) {
    return (
        gulp.src('sass/**/*.scss')
        .pipe(sassify({outputStyle: "compressed"}).on('error', sassify.logError))
        .pipe(gulp.dest('css'))
    ) 
  };

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