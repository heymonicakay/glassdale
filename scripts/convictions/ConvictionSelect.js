

import { useConvictions, getConvictions } from "./ConvictionProvider.js"


const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")

contentTerget.addEventListener("change", (changeEvent) => {

      const customEvent = new CustomEvent("crimeWasChosen", {
            detail: {
                  crimeID: changeEvent.target.value
            }
      })

      eventHub.dispatchEvent(customEvent)
})

export const ConvictionSelect = () => {

    getConvictions()
      .then(() => {
            const convictions = useConvictions()

            const render = convictionsCollection => {
    
                  contentTarget.innerHTML = `
                        <select class="dropdown__custom" id="crimeSelect">
                              <option value="0">
                                    Please select a crime...
                              </option>
                                    ${convictionsCollection.map(
                                          convictionObject => {
                                                return `
                                                      <option class="option__crime">
                                                            ${convictionObject.name}
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