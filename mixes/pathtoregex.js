const pathToRegexp = require("path-to-regexp");


var path = '/:city/*_*';

var regex = pathToRegexp(path, [], {});

console.log(regex);