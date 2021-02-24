import { getCriminals } from "./criminals/CriminalProvider.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import './criminals/KnownAssociates.js';
import { NoteForm } from "./notes/NoteForm.js";
import { ShowNoteButton } from "./notes/ShowNoteButton.js"
import "./notes/NoteList.js";


getConvictions()
    .then(() => {
        ConvictionSelect()
    })


getCriminals()
    .then(() => {
        CriminalList()
    }
  )

  OfficerSelect()
  NoteForm()
  ShowNoteButton()