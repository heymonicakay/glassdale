import { saveNote } from "./NoteProvider.js"

const eventHub = document.querySelector(".form--add-note")
const formTarget = document.querySelector(".form--add-note")

eventHub.addEventListener("click", e => {

    if (e.target.classList.contains("button__save-note")) {

        const noteTitle = document.querySelector(".note-form__input--title");
        const noteAuthor = document.querySelector("note-form__input--name");
        const noteContent = document.querySelector("note-form__input--content");

        const newNote = {
            title: noteTitle.value,
            author: noteAuthor.value,
            content: noteContent.value,
            timestamp: Date.now()
        }

        saveNote(newNote)
    }
})

const render = () => {
    formTarget.innerHTML = `
        <section class="form--note-form">

            <div class="container__note-input">

                <input type="text" class="note-form__input note-form__input--title input--unfocus" placeholder="Note title.." />

                <input type="text" class="note-form__input note-form__input--name input--unfocus" placeholder="Name" />

                <textarea class="note-form__input note-form__input--content" placeholder="Note text here...">
                </textarea>

            </div>

            <span class="button__save-note button--hover button--press button--released">
                Save Note
            </span>

        </section>
    `
}

export const NoteForm = () => {
    render()
}