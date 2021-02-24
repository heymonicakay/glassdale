let notes = []

const eventHub = document.querySelector(".form--add-note")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

export const saveNote = (note) => {

    const jsonNote = JSON.stringify(note)

    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonNote
    })
    .then(getNotes)
        .then(dispatchStateChangeEvent)
}


export const useNotes = () => notes.slice()

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(r => r.json())
        .then(data => notes = data)

}