import { getNotes, useNotes } from "./NoteProvider.js";
import { NoteHTMLConverter } from "./NoteHTML.js";

const noteList = document.querySelector(".container--notes-list")
const eventHub = document.querySelector(".form--add-note")

eventHub.addEventListener("showNotesClicked", customEvent => NoteList() )

eventHub.addEventListener("noteStateChanged", () => {
    const newNotes = useNotes()
    render(newNotes)
})

const render = (n, criminals) => {
    const notesAsStrings = n.map(n => {
        const associatedCriminal = criminals.find(c => c.id === n.criminalId)
        return NoteHTMLConverter(n, associatedCriminal)
    }).join("")

    noteList.innerHTML = notesAsStrings
}
export const NoteList = () => {
    let criminals = useCriminals()
    getNotes().then(() => {
        const notes = useNotes()
        render(notes, criminals)
    })
}