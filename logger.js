const uuid = require('uuid');
const EventEmitter = require('events');
class Logger extends EventEmitter {
    log(msg) {
        let maDate = new Date().toLocaleString();
        this.emit('avertissement', { id: uuid.v4(), temps: maDate, avertissement: msg});
    }
    
    error(msg) {
        let maDate = new Date().toLocaleString();
        this.emit('erreur', { id: uuid.v4(), temps: maDate, erreur: msg});
    }
    
    info(msg) {
        let maDate = new Date().toLocaleString();
        this.emit('information', { id: uuid.v4(), temps: maDate, information: msg});
    }

}

module.exports = Logger;