'use strict'

const gulp = require('gulp');
const { src, dest, watch, series, parallel } = require('gulp');
const sassInheritance = require('gulp-sass-inheritance');
const filter = require('gulp-filter');
const sass = require('gulp-sass');

function compileSass() {
  return src('./cms_skeleton/style_src/style/app.scss')
  //find files that depend on the files that have changed
  .pipe(sassInheritance({dir: './cms_skeleton/style_src/style'}))

  .pipe(filter(function (file) {
      return !/\//.test(file.path) || !/^_/.test(file.relative);
  }))
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(dest('././cms_skeleton/static/style/'));
}

function watcher() {
  watch('./cms_skeleton/style_src/style/**/*.scss', series(compileSass));
};

exports.default = parallel(compileSass, watcher);
