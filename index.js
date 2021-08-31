const Logger = require('./logger');
let monJournal = new Logger();

monJournal.on('avertissement', (data) => console.log('monJournal appele avec:', data));
monJournal.on('information', (data) => console.log('information:', data));
monJournal.on('erreur', (data) => console.log('monJournal erreur:', data));


monJournal.log('Salut');
monJournal.error("voici l'erreur");
monJournal.log('Deuxième Salut');
monJournal.log('Encore');
monJournal.info('Information inmportante, ou pas...');
