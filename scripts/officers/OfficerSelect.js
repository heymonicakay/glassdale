import { getOfficers, useOfficers } from "./OfficerProvider.js";

// Get a reference to the DOM element where the <select> will be rendered
const officerTarget = document.querySelector(".filter__by-officer")
const filterHub = document.querySelector(".container__filters")

// Capture that the user generated a change event by the browser
filterHub.addEventListener("change", (changeEvent) => {

    if (changeEvent.target.id === "officerSelect") {

        const officerSelectedEvent = new CustomEvent("officerSelected", {
            detail: {
                officerName: changeEvent.target.value  // "Suzie Police"
            }
        })

        eventHub.dispatchEvent(officerSelectedEvent)
    }
})

const render = (officers) => {
    console.log("OfficerSelect: Officer select rendered to DOM")
    officerTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officers.map(
                    officer => {
                        return `<option value="${ officer.name }">${officer.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}

export const OfficerSelect = () => {
    getOfficers().then(() => {
        const allOfficers = useOfficers()
        render(allOfficers)
    })
}