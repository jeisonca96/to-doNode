/**
 * 
 */
const fs = require('fs');

let listTo_do = [];

const saveJson = () => {
    let data = JSON.stringify(listTo_do);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    })

}

const loadJson = () => {
    try {
        return listTo_do = require('../db/data.json')
    } catch (error) {
        return listTo_do = []
    }
}

const newNote = (description) => {
    loadJson();
    let to_do = {
        description,
        end: false
    }

    listTo_do.push(to_do);
    saveJson();
    return to_do;
};

const update = (description, state = true) => {
    loadJson();
    let index = listTo_do.findIndex(task => task.description === description)
    if (index > -1) {
        listTo_do[index].end = state;
        saveJson();
        return true
    } else {
        return false
    }
}

const deleteNote = (description) => {
    loadJson();
    let index = listTo_do.findIndex(task => task.description === description)
    if (index > -1) {
        listTo_do = listTo_do.filter(task => task.description !== description);
        saveJson();
        return true
    } else {
        return false
    }
}

module.exports = {
    newNote,
    loadJson,
    update,
    deleteNote
}