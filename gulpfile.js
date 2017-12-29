'use strict';
const path = require('path');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const gulpChanged = require('gulp-changed');
// TypeScript
const gulpTS = require('gulp-typescript');
const gulpTSlint = require('gulp-tslint');
const typescript = require('typescript');
// Rollup
const rollup = require('rollup');
const rollupStream = require('rollup-stream');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglifyComposer = require('gulp-uglify/composer');
const uglifyEs = require('uglify-es');
const del = require('del');
// Webpack
const webpack = require('webpack');

const rollupCommonJs = require('rollup-plugin-commonjs');
const rollupNode = require('rollup-plugin-node-resolve');

const LIB_DIR = "lib/";
const TS_DIST_LIB = "dist-es2015/";
const DIST_DECLARATION = "";
const DIST_LIB = "dist/";
const BUNDLE_MODULE_NAME = "BirthdayImgMaker";
const BUNDLE_NAME = "bundle.js";
const PRODUCTION = process.env.NODE_ENV === 'production';

{
  const tsProj = gulpTS.createProject('tsconfig.json', {
    typescript,
  });
  gulp.task('tsc', ()=>{
    const rs = gulp.src(path.join(LIB_DIR, '**', '*.ts{,x}'))
    .pipe(sourcemaps.init())
    .pipe(tsProj());

    if (DIST_DECLARATION){
      return merge2(
        rs.js.pipe(sourcemaps.write()).pipe(gulp.dest(TS_DIST_LIB)),
        rs.dts.pipe(gulp.dest(DIST_DECLARATION))
      );
    }else{
      return rs.js.pipe(sourcemaps.write()).pipe(gulp.dest(TS_DIST_LIB));
    }
  });
  gulp.task('watch-tsc', ['tsc'], ()=>{
    gulp.watch(path.join(LIB_DIR, '**', '*.ts{,x}'), ['tsc']);
  });
  gulp.task('tslint', ()=>{
    return gulp.src(path.join(LIB_DIR, '**', '*.ts{,x}'))
    .pipe(gulpTSlint({
      formatter: 'stylish',
    }))
    .pipe(gulpTSlint.report({
      emitError: false,
    }));
  });
  gulp.task('watch-tslint', ['tslint'], ()=>{
    gulp.watch(path.join(LIB_DIR, '**', '*.ts{,x}'), ['tslint']);
  });
}
{
  function runWebpack(watch){
    const config = Object.assign(
      {},
      require('./webpack.config.js'),
      {
        entry: path.join(__dirname, TS_DIST_LIB, 'index.js'),
        output: {
          path: path.join(__dirname, DIST_LIB),
          filename: BUNDLE_NAME,
        },
      }
    );
    const compiler = webpack(config);
    const handleStats = (stats, watch)=>{
      console.log(stats.toString({
        chunks: !watch,
        colors: true,
      }));
    };
    if (watch){
      return compiler.watch({
      }, (err, stats)=>{
        if (err){
          console.error(err);
        } else {
          handleStats(stats, true);
        }
      });
    } else {
      return compiler.run((err, stats)=>{
        if (err){
          console.error(err);
        } else {
          handleStats(stats, false);
        }
      });
    }
  }
  gulp.task('bundle-main', ()=>{
    return runWebpack(false);
  });
  gulp.task('bundle', ['tsc'], ()=>{
    return runWebpack(false);
  });
  gulp.task('watch-bundle', ['bundle'], ()=>{
    return runWebpack(true);
  });
}
{
  gulp.task('clean', ()=>{
    const del_target = [DIST_LIB, TS_DIST_LIB];
    if (DIST_DECLARATION){
      del_target.push(DIST_DECLARATION);
    }
    return del(del_target);
  });
}
gulp.task('default', ['tsc', 'tslint', 'bundle']);
gulp.task('watch', ['watch-tsc', 'watch-tslint', 'watch-bundle']);
