const gulp = require('gulp');
const copy = require('gulp-copy');
const bump = require('gulp-bump');
const concat = require('gulp-concat');
const del = require('del');
const jsmin = require('gulp-terser');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-clean-css');
const eslint = require('gulp-eslint');
const htmlhint = require('gulp-htmlhint');
const csslint = require('gulp-csslint');

const paths = {
  js: [
    "src/index.js"
  ],
  html: [
    "src/index.html"
  ],
  css: [
    "src/index.css"
  ],
};

gulp.task("clean", () => del(["build"]));
gulp.task("jsProcess", () =>
  gulp
    .src(paths.js)
    .pipe(eslint()) // {useEslintrc:false}
    .pipe(eslint.failOnError())
    .pipe(eslint.format())
    .pipe(jsmin())
    .pipe(gulp.dest("build"))
);
gulp.task("htmlProcess", () =>
  gulp
    .src(paths.html)
    .pipe(htmlhint()) // https://github.com/htmlhint/HTMLHint/wiki/Usage
    .pipe(htmlhint.failOnError())
    .pipe(htmlmin({collapseWhitespace:true,removeComments:true}))
    .pipe(gulp.dest("build"))
);
gulp.task("cssProcess", () =>
  gulp
    .src(paths.css)
    .pipe(csslint()) // https://github.com/CSSLint/csslint/wiki/Rules
    .pipe(csslint.formatter(/*'fail'*/))
    .pipe(cssmin())
    .pipe(gulp.dest("build"))
);
gulp.task("publish", () =>
  gulp
    .src("build/*")
    .pipe(copy("docs",{prefix:1}))
);
gulp.task('bump', () =>
  gulp
    .src(['./package.json'])
    .pipe(bump({key:"version"}))
    .pipe(gulp.dest('./'))
);
gulp.task("watch", () => gulp.watch(paths.js, gulp.series("js")));

// The default task (called when you run `gulp` from CLI).
gulp.task("default", gulp.series("htmlProcess","jsProcess","cssProcess"));
