const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const watchFiles = "myScss/scss-src/**/*.scss";

function buildStyles() {
  return src(watchFiles).pipe(sass()).pipe(dest("myScss/dist"));
}

function watchTask() {
  watch([watchFiles], buildStyles);
}

exports.default = series(buildStyles, watchTask);
