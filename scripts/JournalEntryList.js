/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"

// DOM reference to where all entries will be rendered

const EntryListComponent = () => {
    const entryLog = document.querySelector("#entryLogDisplay")
    const entries = useJournalEntries()
    // Use the journal entry data from the data provider component

    for (const entry of entries) {
        entryLog.innerHTML += JournalEntryComponent(entry)
    }
}
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */

export default EntryListComponent