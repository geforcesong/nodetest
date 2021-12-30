const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgeCss = require("gulp-purgecss");

const watchFiles = "myScss/scss-src/**/*.scss";

function buildStyles() {
  return src(watchFiles)
    .pipe(sass())
    .pipe(purgeCss({ content: ["*.html"] }))
    .pipe(dest("myScss/dist"));
}

function watchTask() {
  watch([watchFiles], buildStyles);
}

exports.default = series(buildStyles, watchTask);
