/**
 * 
 * 
 */

//Opciones new
const optionsNew = {
    description: {
        demand: true,
        alias: 'd'
    }
};

//Opciones update
const optionsUpdate = {
    description: {
        demand: true,
        alias: 'd'
    },
    end: {
        alias: 'e',
        default: true
    }
};

//Opciones delete
const optionsDelete = {
    description: {
        demand: true,
        alias: 'd'
    }
};

const argv = require('yargs')
    .command('new', 'Create note', optionsNew)
    .command('update', 'Update state to note', optionsUpdate)
    .command('delete', 'Delete note', optionsUpdate)
    .help()
    .argv;

module.exports = {
    argv
}