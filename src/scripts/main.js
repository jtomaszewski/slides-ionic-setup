// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  hash = require('bespoke-hash'),
  markdown = require('bespoke-markdown'),
  progress = require('bespoke-progress');

// Bespoke.js
bespoke.from('article', [
  markdown(),
  cube(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  hash(),
  progress(),
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

