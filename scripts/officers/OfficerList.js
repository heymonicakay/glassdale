import { useOfficers, getOfficers } from "./OfficerProvider.js";
import { OfficerHTMLConverter } from "./OfficerHTMLConverter.js";

const contentTarget = document.querySelector(".container--officer-list")

export const OfficerList = () => {

    getOfficers()
        .then(() => {
            const officerArray = useOfficers()
            console.table(officerArray)
            let officerHTMLRepresentations = ""

            officerArray.forEach(officer => {
                officerHTMLRepresentations += OfficerHTMLConverter(officer)
            })

            contentTarget.innerHTML = `

                <article class="officerList">
                    ${ officerHTMLRepresentations }
                </article>
            `
        })
}

