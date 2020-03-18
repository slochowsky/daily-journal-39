import { getEntries } from "./JournalDataProvider.js";
import EntryFormComponent from "./JournalForm.js";
import EntryListComponent from "./JournalList.js";


EntryFormComponent()

getEntries()
.then(
    EntryListComponent
    )