const fs = require('fs')

fs.readFile('data.txt', 'utf8', function(err, data) {
    const content = data;
    if(!err) {
        console.log(content);
    } else {
        console.log("Impossible d'ouvrir le fichier.");
    }
});

try { fs.renameSync('data.txt')} catch (err) {   
    console.error('impo');}