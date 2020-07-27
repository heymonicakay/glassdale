import { getCriminals } from "./criminals/CriminalProvider.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { getConvictions, useConvictions } from "./convictions/ConvictionProvider.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";

getConvictions()
    .then(() => {
        ConvictionSelect()
    })


getCriminals()
    .then(() => {
        CriminalList()
    }
      /*
          Now that you have the data, what
          component should be rendered?
      */
  )