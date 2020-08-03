const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <input type="text" class="note--title" placeholder="Enter note title" />
        <input type="text" class="note--title" placeholder="Enter note title" />
        <textarea class="note--content" placeholder="Enter note here..." />

        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}