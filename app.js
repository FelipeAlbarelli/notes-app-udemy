const validator = require('validator');
const chalk = require('chalk');
const notes = require('./notes');
const log = console.log;
const yargs = require('yargs');

yargs.version('1.1.0')
// add , remove , read , list

// create add command

yargs.command({
    command : 'add',
    describe : 'add a new note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler : (argv) => {
        notes.addNote(argv.title , argv.body)
    }
})

yargs.command({
    command : 'remove',
    describe : 'remove a new note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler : (argv) => {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command : 'read',
    describe : 'read a note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler : (argv) => {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command : 'list',
    describe : 'list all notes',
    handler : () => {
        notes.listNotes()
    }
})

yargs.parse()

