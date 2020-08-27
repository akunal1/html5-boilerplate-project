const gulp = require("gulp");
const stubby = require("gulp-stubby-server");

let options = {};
gulp.task(
  "stubby",
  gulp.series(function (cb) {
    options = {
      quiet: false,
      files: ["data/*.yaml"],
    };
    stubby(options, cb);
  })
);
