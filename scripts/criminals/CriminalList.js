import { getCriminals, useCriminals } from './CriminalProvider.js';
import { criminalCardCreator } from "./CriminalHTMLConverter.js";
import { useConvictions } from "../convictions/ConvictionProvider.js";

const criminalListTarget = document.querySelector(".container--criminal-list")
const eventHub = document.querySelector(".main")

eventHub.addEventListener("click", (buttonClickedEvent) => {

      if(buttonClickedEvent.target.classList.contains("button")) {
            let theLastClass = "";

            const buttonClassList = buttonClickedEvent.target.classList

            for (let i = 0; i < buttonClassList.length; i += 2) {
                  theLastClass += buttonClassList[i]
            }
            const [_, criminalId] = theLastClass.split("--");

            const criminalIdInt = parseInt(criminalId);

            const associateButtonEvent = new CustomEvent("theButtonWasClicked", {
                  detail: {
                        thisCriminalId: criminalIdInt
                  }
            })
            eventHub.dispatchEvent(associateButtonEvent)
      }
      else {
            return false
      };
})

eventHub.addEventListener("crimeWasChosen", crimeChosenEvent => {
   
      const crimeThatWasChosen = crimeChosenEvent.detail.crimeId
      console.log("TEST - crimeThatWasChosen", crimeThatWasChosen)
      //pulling in the array of crimes from api and putting it into a variable
      const arrayOfCrimes = useConvictions()

      console.log("TEST - arrayOfCrimes", arrayOfCrimes)

//array method - requires a function
//iterate over the array of crimes (now contained w/in var) using '.find' array method to find which specific crime object has the same crime id as the one delivered by the crimeWasChosen event.
      const specificCrimeObject = arrayOfCrimes.find(
            (thisCrime) => {
            //The id delivered in the payload from our cutom event is actually a string (as indicated by the surrounding ""). Need to convert it to an integer. Use parseInt to do so.
                  return crimeThatWasChosen === thisCrime.name
            }
      )

      console.log("TEST - specificCrimeObject", specificCrimeObject);

      //pulling in the array of ciminals from api and putting it into a variable
      const allCriminals = useCriminals()

      //iterate over the array of criminals (now contained w/in var) using '.filter' array method to show only criminals with convictions values matching the value of the specificCrimeObject.name 
      const filteredByCrime = allCriminals.filter(
            (currentCriminal) => {
                  return specificCrimeObject.name === currentCriminal.conviction
            }
      )
      render(filteredByCrime)
})
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

const render = (convictedCriminalsList) => {

      let mugShot = ""
  
      convictedCriminalsList.forEach(convictedCriminal => {
          mugShot += criminalCardCreator(convictedCriminal)
      })
  
      criminalListTarget.innerHTML = `
            <section class="container--criminal-list">
                  <h2 class="header--criminal-list">
                  Convicted Criminals
                  </h2>
                  <div class="container--criminal-cards">
                  ${ mugShot }
                  </div>
            </section>
      `
  }

export const CriminalList = () => {

      getCriminals()
      // WAIT FOR IT.....
            .then(() => {
                  const lineup = useCriminals()
                  render(lineup)
            })
}