import { getCriminals, useCriminals } from './CriminalProvider.js'
import { criminalHTMLConverter } from "./CriminalHTMLConverter.js"

const contentTarget = document.querySelector(".criminalsContainer")
//create an eventHub
const eventHub = document.querySelector(".container")

// add an event listener to the eventHub. this component is responsible for rendering the criminal list, so this component needs to listen for the custom event called "officerSelected".
eventHub.addEventListener("officerSelected", (officerSelectedEvent) => {
      
      const officerChosen = officerSelectedEvent.detail.officerName

      const allCriminals = useCriminals()

      // this component is responsible for filtering the criminal list by the arresting officer. 
      // necessary imports = getCriminals to get the criminal data from the API and useCriminals to use the array of criminal Objects - array is called "criminals"
      const filteredByOfficer = allCriminals.filter(
            (thisCriminal) => {
                  // if this specific criminalObject's property called "arresting officer" matches with the custom event (called officerSelectedEvent)'s payload detail "officerName", then return true.

                  if (thisCriminal.arrestingOfficer === officerChosen) {
                        return true
                  }
                  // otherwise return false
                  return false
            }
      )
      
      // display filtered list of criminals by calling the render function and passing in the array called filteredByOfficer
      render(filteredByOfficer)
})
export const CriminalList = () => {

      getCriminals()
      // WAIT FOR IT.....
            .then(() => {
                  // NO PARAM NEEDED bc NO ARGUMENT PASSED bc NOTHING RETURNED FROM PREV .THEN
                  const lineup = useCriminals()

                  let mugShots = ""

                  lineup.forEach(criminal => {
                        mugShots += criminalHTMLConverter(criminal)
                  })

                  contentTarget.innerHTML = mugShots
            })
}