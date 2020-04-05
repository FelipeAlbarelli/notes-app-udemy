
const fs = require('fs');
const ch = require('chalk')

const log = console.log;
const getNotes = notes => `Your notes are ${notes}`;


// save notes array in json file (substitutes previous notes!)
const saveNotes = notes => {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json' , notesJSON)
}

// load notes from json
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

// saves file in json
const addNote = (title , body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find( note => note.title == title)

    if (duplicateNote == undefined ){
        notes.push({title , body});
        saveNotes(notes);
        log(ch.green('New note added :)'))
    } else {
        log(ch.red(`Note title ${title} already taken :(`))
    }

}

// remove note from json
const removeNote = title => {
    const notes = loadNotes();
    if (notes.find( note => note.title == title )){
        saveNotes(notes.filter(note => note.title != title))
        log(ch.bgGreen(`Note ${title} removed with success :)`))
    } else {
        log(ch.bgRed(`No note with title ${title} found :(`))
    }
}

// list notes from json
const listNotes = () => {
    const notes = loadNotes();

    if (notes.length != 0){
        log("Your notes:")
        notes.forEach( note => {
            log(note.title , '.......................' , note.body)
        })
    } else {
        log('You have no notes :/')
    }
}

// read note from json
const readNote = title => {
    const notes = loadNotes();
    const note = notes.find( n => n.title == title );
    if (note){
        log( ch.bgYellow.black(title) );
        log(note.body)
    } else {
        log(ch.bgRed(`No note with title '${title}' found :(`))
    }
}

module.exports = { addNote , removeNote , listNotes , readNote}
