import { useCriminals } from "./CriminalProvider.js";

const eventHub = document.querySelector(".main")

eventHub.addEventListener("theButtonWasClicked", customEvent => {

      const mugShotId = customEvent.detail.thisCriminalId
      
      const allCriminals = useCriminals()

      const matchingCriminal = allCriminals.find(
            (criminal) => {
            return criminal.id === mugShotId
            }
      )
      
      showAssociates(matchingCriminal)
      
})

const showAssociates = (thisCriminal) => {

      const changeCard = document.querySelector(".associate-list")

      changeCard.classList.toggle("show-associate-list")

      changeCard.innerHTML = `
            <span class="associate-pop-up">
                  <h4 class="pop-up--header">
                  ${thisCriminal.name}'s Known Associates:
                  </h4>
                        ${thisCriminal.known_associates.map(thisAssociate => {
                        return `
                              <span class="pop-up--name">
                                    Name: ${thisAssociate.name}
                              </span>
                              <span class="pop-up--alibi">
                                    Alibi: ${thisAssociate.alibi.charAt(0).toUpperCase() + thisAssociate.alibi.slice(1)}.
                              </span>
                        `
                        }
                  ).join("<br>")}
            </span>
      `
}