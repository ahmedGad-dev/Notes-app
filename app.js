const chalky = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')
const { describe, demand } = require('yargs')

// customize yargs version
yargs.version('1.1.0')


// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    //CUSTOMIZING THE BUILDER
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'This is the project body',
            demandOption: true,
            type: 'string',
      },
    },
   //HANDLER METHOD
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})




yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
        handler(argv){
        notes.removeNote(argv.title)  
    }
})


yargs.command({
    command: 'list',
    describe: 'file lists',
    handler(){
        notes.listNotes()
    }
})


yargs.command({
    command: 'read',
    describe: 'read a file',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()

