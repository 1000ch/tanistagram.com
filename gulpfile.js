const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const FILE_COPY = [
  'src/CNAME',
  'src/index.html',
  'src/manifest.json',
  'src/service-worker.js'
];

const FILE_IMG = [
  'src/img/**/*.{jpg,png}'
];

const FILE_CWEBP = [
  'src/img/tani/*.jpg'
];

const FILE_CSS = [
  'node_modules/normalize.css/normalize.css',
  'node_modules/grd/dist/grd.css',
  'src/css/*.css'
];

const FILE_JS = [
  'src/js/app.js'
];

gulp.task('copy', () => {
  return gulp.src(FILE_COPY)
    .pipe(gulp.dest('dist'));
});

gulp.task('img', () => {
  return gulp.src(FILE_IMG)
    .pipe(gulp.dest('dist/img'));
});

gulp.task('cwebp', () => {
  const cwebp = require('gulp-cwebp');

  return gulp.src(FILE_CWEBP)
    .pipe(cwebp())
    .pipe(gulp.dest('dist/img/tani'));
});

gulp.task('css', () => {
  const csso = require('gulp-csso');

  return gulp.src(FILE_CSS)
    .pipe(csso())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', () => {
  const browserify = require('browserify');
  const babelify = require('babelify');
  const source = require('vinyl-source-stream');
  const buffer = require('vinyl-buffer');
  const uglify = require('gulp-uglify');

  return browserify(FILE_JS)
    .transform('babelify', {
      presets : ['es2015'],
      plugins : ['add-module-exports', 'transform-class-properties']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', () => {
  browserSync.init({
    server : {
      baseDir : './dist'
    }
  });

  gulp.watch(FILE_COPY, ['copy']).on('change', browserSync.reload);
  gulp.watch(FILE_IMG, ['img']).on('change', browserSync.reload);
  gulp.watch(FILE_CWEBP, ['cwebp']).on('change', browserSync.reload);
  gulp.watch(FILE_CSS, ['css']).on('change', browserSync.reload);
  gulp.watch(FILE_JS, ['js']).on('change', browserSync.reload);
});
