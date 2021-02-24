const contentTarget = document.querySelector(".container__button--show-notes")
const eventHub = document.querySelector(".container__button--show-notes")

eventHub.addEventListener("click", e => {
    if (e.target.classList.contains("button--show-notes")) {
        const showNotesClickEvent = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(showNotesClickEvent)
    }
})

export const ShowNoteButton = () => {
    contentTarget.innerHTML = `<button class="button--show-notes button--active button--hover button--press button--released">
      Show Notes
    </button>
    `
}