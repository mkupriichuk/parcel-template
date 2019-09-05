const purify = require('purify-css');
const cssFile = './dist/app.ff7fd767.css'; // YOUR CSS FILE


const content = ['./dist/*.js', './dist/*.html'];
const css = [cssFile];
const options = {
  output: cssFile,
  whitelist: ['is-open', 'dropdown', 'active', '*owl*', '*mfp*'],
  info: true,
  rejected: true,
  minify: true
};

purify(content, css, options);
