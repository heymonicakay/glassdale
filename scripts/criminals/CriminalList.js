import { getCriminals, useCriminals } from './CriminalProvider.js'
import { criminalHTMLConverter } from "./CriminalHTMLConverter.js"

const contentTarget = document.querySelector(".criminalsContainer")
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