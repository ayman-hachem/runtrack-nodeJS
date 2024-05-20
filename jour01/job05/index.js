var path = require('path');
var filePath = './runtrack-nodejs/job05/index.js';
var filename = path.basename(filePath);
var dirname = path.dirname(filePath);
var extname = path.extname(filePath);
console.log(filename);
console.log(dirname);
console.log(extname);
