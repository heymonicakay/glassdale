import { getCriminals } from "./criminals/CriminalProvider.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { getConvictions, useConvictions } from "./convictions/ConvictionProvider.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import './criminals/KnownAssociates.js'

getConvictions()
    .then(() => {
        ConvictionSelect()
    })


getCriminals()
    .then(() => {
        CriminalList()
    }
  )