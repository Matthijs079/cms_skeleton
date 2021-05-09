'use strict'

const gulp = require('gulp');
const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass');

function compileSass() {
  return src('./cms_skeleton/style_src/style/app.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(dest('././cms_skeleton/static/style/'));
}

function watcher() {
  watch('./cms_skeleton/style_src/style/**/*.scss', series(compileSass));
};

exports.default = parallel(compileSass, watcher);
