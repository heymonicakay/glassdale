import { getCriminals } from "./criminals/CriminalProvider.js";
import { CriminalList } from "./criminals/CriminalList.js";

getCriminals()
    .then(() => {
        CriminalList()
    }
      /*
          Now that you have the data, what
          component should be rendered?
      */
  )