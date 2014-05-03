/**
 * Created by azder on 2014-05-03.
 */

// ALWAYS
'use strict';

//noinspection JSUnresolvedFunction
var container = require('../source/container.js');

var c = container();

console.log(c(), c(null));

c('a', 1);
c('b', []);
c(3, 'c');

console.log(c(), c(null));

c('b', null)

console.log(c(), c(null), c(3));
