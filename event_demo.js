const EventEmitter = require('events');
class MaClasseEmeteur extends EventEmitter{ }

const emeteur = new MaClasseEmeteur();
// enregistrement du gestionnaire d'évènement
emeteur.on('evenement', () => console.log('evenement est allumé'));
emeteur.on('autre', () => console.log('aute chose'))

// initier quelques évenements....
emeteur.emit('evenement');
emeteur.emit('autre')
emeteur.emit('evenement');
emeteur.emit('evenement');
emeteur.emit('evenement');
emeteur.emit('evenement');
emeteur.emit('autre')
