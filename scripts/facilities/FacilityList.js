import { getFacilities, useFacilities} from "./facilityProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "./criminalFacilityProvider.js"
import { getCriminals, useCriminals } from "../criminals/criminalProvider.js"
import { facility } from "./Facility.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".facilityContainer")

eventHub.addEventListener("facilitiesButtonClicked", clickEvent => { facilitiesList() })


    const toggleVisibility = (eId, bId, cId) => {
        const e = document.getElementById(eId); //prison
        const b = document.getElementById(bId); //showFacilities
        const c = document.getElementById(cId); //person

        if(e.style.display == ''){
           e.style.display = 'none';
           b.innerHTML = 'Show Facilities';
           c.style.display = '';
        }
        else {
           e.style.display = '';
           b.innerHTML = 'Show Criminals';
           c.style.display = 'none';}
     }


     let facilities = []
     let crimFac = []
     let criminalState = []


    export const facilitiesList = () => {
        // Kick off the fetching of both collections of data
        getCriminals()
            .then(getFacilities)
            .then(getCriminalFacilities)
            .then(
                () => {
                    // Pull in the data now that it has been fetched

                    facilities = useFacilities()
                    crimFac = useCriminalFacilities()
                    criminalState = useCriminals()

                    // Pass all three collections of data to render()
                    render(facilities)
                    toggleVisibility("prison", "showFacilities", "person")
                }
            )
    }


const render = (facilitiesToRender) => {
    // Step 1 - Iterate all facilities
    contentTarget.innerHTML = facilitiesToRender.map(facilityObject => {
        const crimFacForFacility = crimFac.filter(cf => cf.facilityId === facilityObject.id)
        // Step 3 - Convert the relationships to criminals with map()
        const criminalList = crimFacForFacility.map(cf => {
            const matchingCriminalObject = criminalState.find(c => c.id === cf.criminalId)
            return matchingCriminalObject
        })
        return facility(facilityObject, criminalList)
        }
    ).join("")
}
