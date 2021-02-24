import { getCriminals, useCriminals } from './CriminalProvider.js';
import { getOfficers, useOfficers } from '../officers/OfficerProvider.js';
import { criminalCardCreator } from "./CriminalHTMLConverter.js";
import { useConvictions } from "../convictions/ConvictionProvider.js";
import { getFacilities, useFacilities } from "../facilities/facilityProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facilities/criminalFacilityProvider.js"

const criminalListTarget = document.querySelector(".container--criminal-list")
const eventHub = document.querySelector(".main")
const filterHub = document.querySelector(".container__filters")

let criminals = [];
let facilities = [];
let criminalFacilities = [];

const selection = {
  crime: "",
  officer: ""
}

export const CriminalList = () => {
  getCriminals()
    .then(getFacilities)
    .then(getCriminalFacilities)
    .then(() => {
        criminals = useCriminals()
        criminalFacilities = useCriminalFacilities()
        facilities = useFacilities()

        render()
    })
}

eventHub.addEventListener("click", (buttonClickedEvent) => {

  if(buttonClickedEvent.target.classList.contains("button")) {
    const classes = buttonClickedEvent.target.className.split(" ")
    const criminalId = parseInt(classes[(classes.length - 1)].split("--")[1])

    const associateButtonEvent = new CustomEvent("theButtonWasClicked", {
          detail: {
                thisCriminalId: criminalId
          }
    })
    eventHub.dispatchEvent(associateButtonEvent)
  }
})

filterHub.addEventListener("crimeWasChosen", crimeChosenEvent => {
  selection.crime = crimeChosenEvent.detail.crimeId.charAt(0).toLowerCase() + crimeChosenEvent.detail.crimeId.slice(1)

  filterCriminals()
  render()
})

filterHub.addEventListener("officerWasChosen", (officerChosen) => {
  selection.officer = officerChosen.detail.officerName

  filterCriminals()
  render()
})

const render = () => {
  let criminalListHTML = ""
  const arrCrimHTML = criminals.map(c => {
      const cfRel = criminalFacilities.filter(cf => c.id === cf.criminalId)

      const mf = cfRel.map(rel => {
          const crimFacByCrim = facilities.find(f => rel.facilityId === f.id)
          return crimFacByCrim
        }
      )
    return criminalCardCreator(c, mf)
    }
  )

  criminalListTarget.innerHTML = `
    <section class="container--criminal-list">
      <h2 class="header--criminal-list">
      Convicted Criminals
      </h2>
      <div class="container--criminal-cards">
      ${ arrCrimHTML.join("") }
      </div>
    </section>
    `
}

const filterCriminals = () => {
  criminals = useCriminals()
  const officers = useOfficers()

  const convictions = useConvictions()

  if (chosenFilters.crime !== "") {
      const foundCrimeObject = convictions.find(c => parseInt(chosenFilters.crime) === c.id)
      criminals = criminals.filter(c => foundCrimeObject.name === c.conviction)
  }

  if (chosenFilters.officer !== "") {
    const foundOfficerObject = officers.find(o => parseInt(chosenFilters.officer) === o.id)
    criminals = criminals.filter(c => c.arrestingOfficer === foundOfficerObject.name)
  }
}

