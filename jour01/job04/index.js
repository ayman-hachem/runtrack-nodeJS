const fs = require('fs');
const folder = "../RUNTRACK-NODEJS"
fs.readdir(folder, (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });