import { useConvictions, getConvictions } from "./ConvictionProvider.js"

const crimeFilterTarget = document.querySelector(".filter__by-crime")
const filterHub = document.querySelector(".container__filters")

crimeFilterTarget.addEventListener("change", (changeEvent) => {

      const crimeChosenEvent = new CustomEvent("crimeWasChosen", {
            //what info is included in the payload to eventHub? 
            detail: {
                  crimeId: changeEvent.target.value
            }
      })
//dispatch the custom event to the eventHub
      filterHub.dispatchEvent(crimeChosenEvent)
})

export const ConvictionSelect = () => {

    getConvictions()
      .then(() => {
            const convictions = useConvictions()

            const render = convictionsCollection => {
    
                  crimeFilterTarget.innerHTML = `
                        <select class="select select__dropdown select__dropdown--filter-by-crime">
                              <option class="option option--none value="0">
                                    Please select a crime...
                              </option>
                                    ${convictionsCollection.map(
                                          convictionObject => {
                                                return `
                                                      <option class="option option--crime">
                                                            ${convictionObject.name.charAt(0).toUpperCase() + convictionObject.name.slice(1)}
                                                      </option>`
                                          }
                                    ).join("")
                              }
                        </select>    
                  `
            }

      render(convictions)
})
}