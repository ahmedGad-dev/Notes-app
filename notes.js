const fs = require('fs')
const chalky = require('chalk')

// function used by app.js in the ADD COMMAND HANDLER to add a note title and body
     const addNote = (title, body) =>{
     const notes = loadNotes()
     const duplicateNotes = notes.filter((note) =>  note.title === title)
     const duplicateNote = notes.find((note) => note.title === title)
     if (!duplicateNote){ //if (duplicateNote == 0 && duplicateNote == false)
        notes.push({
            title: title,
            body:  body,
        }) 
     saveNotes(notes)
     console.log(chalky.green.bold('Adding new notes....'))
    } 
    else{ console.log(chalky.red.bold('Note Title is already Taken'))
}
    }


// function used by app.js in the REMOVE COMMAND HANDLER to remove a note by it's title
    const removeNote = function(title){
        const notes = loadNotes()
        const notesToKeep = notes.filter((note)=> note.title !== title)
                   
        if (notes.length > notesToKeep.length ){
            console.log(chalky.green.inverse('Removing the ' + "(" + title + ")" + ' note'))
            saveNotes(notesToKeep)
        } else if (notes.length == notesToKeep.length){
            console.log(chalky.red.inverse('No Notes found'))
        }                
    }

    const listNotes = () => {
        const notes = loadNotes()
        console.log(chalky.inverse('Your notes are')) 
        notes.forEach(note => {
            console.log(chalky.green.bold(note.title)) 
        });    
    }

    const readNote = (title) => {
        const notes = loadNotes()
        const newNote = notes.find((note) => note.title === title) 
        if (newNote){
            console.log(chalky.green.bold(newNote.title)) 
            console.log(chalky.inverse(newNote.body))
        } else{
            console.log(chalky.red.inverse('No notes found'))
        }
    }  
    
        
    
 

 // Save notes function for saving notes after changing them
    const saveNotes = (notes) => {
    const dataShow = JSON.stringify(notes)
    fs.writeFileSync('notes.json' , dataShow )
}

// First function used by notes app to load the notes
const loadNotes = () => {
    try{
        const dataBuffer =  fs.readFileSync('notes.json')
        const dataJson =    dataBuffer.toString()
        return JSON.parse(dataJson)
     } 
     catch(e){
         return []
     }   
}
// First function used by notes app to load the notes


//Exportations for using objects in app.js (IMPORTANT)
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
//Exportations for using objects in app.js (IMPORTANT)