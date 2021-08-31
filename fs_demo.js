const fs = require('fs');
const path = require('path');

//c:\\Users\bvjul\Documents\Cégep AEC Développement mobile\Session 2\PW1\chapitre4\test
// fs.mkdirSync(path.join(__dirname, 'test'), {});
// console.log('Dossier test créé');
// fs.mkdir(path.join(__dirname, 'test2'), {}, err => {
// if (err) throw err;
// console.log('Dossier test2 créé avec succès!!');
// });
// c:\\Users\bvjul\Documents\Cégep AEC Développement mobile\Session 2\PW1\chapitre4\test\salut.txt

fs.appendFile(
    path.join(__dirname, 'test', 'salut.txt'),
    '\n  ok ça fonctionne maintenant !!!!!',
    err => {
        if (err) throw err;
        console.log('Fichier salut.txt créé');
    }
);
console.log('fin du propgramme');