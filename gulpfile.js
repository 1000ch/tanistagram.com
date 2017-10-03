const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const FILE_COPY = [
  'src/CNAME',
  'src/index.html',
  'src/manifest.json',
  'src/service-worker.js',
  'src/tani-image.js',
  'src/book-affiliate.js'
];

const FILE_IMG = [
  'src/img/**/*.{jpg,png}'
];

const FILE_CWEBP = [
  'src/img/tani/*.jpg'
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

gulp.task('watch', () => {
  browserSync.init({
    server : {
      baseDir : './dist'
    }
  });

  gulp.watch(FILE_COPY, ['copy']).on('change', browserSync.reload);
  gulp.watch(FILE_IMG, ['img']).on('change', browserSync.reload);
  gulp.watch(FILE_CWEBP, ['cwebp']).on('change', browserSync.reload);
});
