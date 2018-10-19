/**
 * 
 * 
 */

const argv = require('./config/yargs').argv;
const colors = require('colors');
const { newNote, loadJson, update, deleteNote } = require('./to-do/to-do');

let comando = argv._['0'];

switch (comando) {
    case 'new':
        let response = newNote(argv.description);
        console.log(response);
        break;

    case 'update':
        let updat = update(argv.description, argv.end)
        console.log(updat);
        break;

    case 'list':
        let list = loadJson();
        console.log('===============To do!==============='.green);
        for (const task of list) {
            console.log(task.description);
            console.log('State:', task.end);
            console.log('===================================='.green);
        }
        break;

    case 'delete':
        let delet = deleteNote(argv.description)
        console.log(delet);
        break;
    default:
        console.log('Opción no definida', comando.red);
        break;
}